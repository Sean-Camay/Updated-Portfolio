from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, status
from sqlalchemy.orm import Session
from sqlalchemy import desc
import os
import uuid
from datetime import timedelta
import librosa  # For getting audio duration

from models import TrackModel, get_db
from schemas import TrackResponse, TrackMetadataUpdate
from auth import get_admin_user
from config import UPLOAD_DIR, MAX_FILE_SIZE

router = APIRouter()

@router.get("", response_model=list[TrackResponse])
async def get_all_tracks(db: Session = Depends(get_db)):
    """
    Get all available tracks
    Public endpoint - anyone can view the playlist
    """
    tracks = db.query(TrackModel).order_by(desc(TrackModel.created_at)).all()
    
    # Add URL for each track
    for track in tracks:
        track.url = f"/api/tracks/{track.id}/stream"
    
    return tracks

@router.get("/{track_id}", response_model=TrackResponse)
async def get_track(track_id: str, db: Session = Depends(get_db)):
    """Get a single track by ID"""
    track = db.query(TrackModel).filter(TrackModel.id == track_id).first()
    
    if not track:
        raise HTTPException(status_code=404, detail="Track not found")
    
    track.url = f"/api/tracks/{track.id}/stream"
    return track

@router.get("/{track_id}/stream")
async def stream_track(track_id: str, db: Session = Depends(get_db)):
    """
    Stream audio file for a track
    Returns the audio file for playback
    """
    track = db.query(TrackModel).filter(TrackModel.id == track_id).first()
    
    if not track:
        raise HTTPException(status_code=404, detail="Track not found")
    
    file_path = track.file_path
    
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Audio file not found")
    
    # Return file for streaming
    from fastapi.responses import FileResponse
    return FileResponse(
        file_path,
        media_type="audio/mpeg",
        headers={"Content-Disposition": f"inline; filename={track.title}.mp3"}
    )

@router.post("", response_model=TrackResponse)
async def upload_track(
    file: UploadFile = File(...),
    title: str = None,
    artist: str = None,
    album: str = None,
    admin: dict = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """
    Upload a new track (admin only)
    Requires JWT token from /api/auth/login
    """
    # Validate file
    if not file.content_type.startswith("audio/"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File must be an audio file"
        )
    
    # Check file size
    file_size = await file.seek(0, 2)
    if file_size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"File too large. Max size: {MAX_FILE_SIZE / 1024 / 1024}MB"
        )
    
    await file.seek(0)
    
    # Generate unique filename
    file_extension = file.filename.split(".")[-1]
    unique_filename = f"{uuid.uuid4()}.{file_extension}"
    file_path = os.path.join(UPLOAD_DIR, unique_filename)
    
    # Save file to disk
    with open(file_path, "wb") as buffer:
        content = await file.read()
        buffer.write(content)
    
    # Get audio duration using librosa
    try:
        duration = librosa.get_sinfo(file_path).duration
    except:
        duration = 0  # Fallback if librosa fails
    
    # Use filename as title if not provided
    if not title:
        title = file.filename.split(".")[0]
    
    # Create track record in database
    track_id = str(uuid.uuid4())
    db_track = TrackModel(
        id=track_id,
        title=title or "Untitled",
        artist=artist or "Unknown",
        album=album or "Unknown",
        duration=duration,
        file_path=file_path,
        album_art=None
    )
    
    db.add(db_track)
    db.commit()
    db.refresh(db_track)
    
    db_track.url = f"/api/tracks/{db_track.id}/stream"
    return db_track

@router.delete("/{track_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_track(
    track_id: str,
    admin: dict = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Delete a track (admin only)"""
    track = db.query(TrackModel).filter(TrackModel.id == track_id).first()
    
    if not track:
        raise HTTPException(status_code=404, detail="Track not found")
    
    # Delete file from disk
    if os.path.exists(track.file_path):
        os.remove(track.file_path)
    
    # Delete from database
    db.delete(track)
    db.commit()
    
    return None

@router.patch("/{track_id}", response_model=TrackResponse)
async def update_track(
    track_id: str,
    track_update: TrackMetadataUpdate,
    admin: dict = Depends(get_admin_user),
    db: Session = Depends(get_db)
):
    """Update track metadata (admin only)"""
    track = db.query(TrackModel).filter(TrackModel.id == track_id).first()
    
    if not track:
        raise HTTPException(status_code=404, detail="Track not found")
    
    # Update only provided fields
    update_data = track_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(track, field, value)
    
    db.commit()
    db.refresh(track)
    
    track.url = f"/api/tracks/{track.id}/stream"
    return track