from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class TrackBase(BaseModel):
    """Base schema for music tracks"""
    title: str = Field(..., example="Shape of You")
    artist: str = Field(..., example="Ed Sheeran")
    album: Optional[str] = Field(None, example="Divide")
    duration: float = Field(..., example=233.0)  # Duration in seconds
    album_art: Optional[str] = Field(None, example="https://example.com/album_art.jpg")  # URL or file path
    file_path: str = Field(..., example="/path/to/audio/file.mp3")  # Path to audio file on server

class TrackCreate(TrackBase):
    """Schema for creating a new track"""
    pass

class TrackUpdate(BaseModel):
    """Schema for updating an existing track"""
    title: Optional[str] = Field(None, example="Shape of You")
    artist: Optional[str] = Field(None, example="Ed Sheeran")
    album: Optional[str] = Field(None, example="Divide")
    duration: Optional[float] = Field(None, example=233.0)  # Duration in seconds
    album_art: Optional[str] = Field(None, example="https://example.com/album_art.jpg")  # URL or file path
    file_path: Optional[str] = Field(None, example="/path/to/audio/file.mp3")  # Path to audio file on server
class TrackMetadataUpdate(BaseModel):
    """Schema for updating track metadata only"""
    title: Optional[str] = None
    artist: Optional[str] = None
    album: Optional[str] = None
    album_art: Optional[str] = None
    
class TrackResponse(TrackBase):
    """Schema for track response (what API returns)"""
    id: str
    url: str  # URL to stream the audio
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True

class PlaylistResponse(BaseModel):
    """Schema for playlist response"""
    id: str
    name: str
    tracks: list[TrackResponse]

class LoginRequest(BaseModel):
    """Schema for login request"""
    username: str
    password: str

class TokenResponse(BaseModel):
    """Schema for token response"""
    access_token: str
    token_type: str = "bearer"