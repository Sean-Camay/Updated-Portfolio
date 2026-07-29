import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material'
import { Track } from '../../types/musicType'
import axios from 'axios'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

const API_BASE_URL = 'http://localhost:8000/api'

interface PlaylistDisplayProps {
  tracks: Track[]
  authToken?: string | null
  onTrackDelete?: (trackId: string) => void
  onTrackClick?: (trackId: string) => void
}

export const PlaylistDisplay = ({
  tracks,
  authToken,
  onTrackDelete,
  onTrackClick,
}: PlaylistDisplayProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [trackToDelete, setTrackToDelete] = useState<string | null>(null)

  const openDeleteDialog = (trackId: string) => {
    setTrackToDelete(trackId)
    setDeleteDialogOpen(true)
  }

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false)
    setTrackToDelete(null)
  }

  const handleDelete = async () => {
    if (!authToken || !trackToDelete) {
      alert('You must be logged in to delete tracks')
      return
    }

    try {
      if (trackToDelete) {
        await axios.delete(`${API_BASE_URL}/tracks/${trackToDelete}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        onTrackDelete?.(trackToDelete)
        closeDeleteDialog()
      }
    } catch (error) {
      console.error('Delete Failed', error)
      alert('Failed to delete track')
    }
  }
  return (
    <>
      <Card className='mb-7'>
        <CardContent>
          <h2>
            Library ({tracks.length} {tracks.length === 1 ? 'track' : 'tracks'})
          </h2>
          <Box style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {tracks.length > 0 ?
              tracks.map((track) => (
                <Box
                  key={track.id}
                  style={{
                    padding: '12px',
                    borderBottom: '1px solid #e0e0e0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    onClick={() => onTrackClick?.(track.id)}
                    style={{ cursor: onTrackClick ? 'pointer' : 'default' }}
                  >
                    <div style={{ fontWeight: 'bold' }}>{track.title}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {track.artist} • {track.album}
                    </div>
                  </Box>
                  <div style={{ fontSize: '12px', color: '#999' }}>
                    {Math.floor(track.duration / 60)}:
                    {String(Math.floor(track.duration % 60)).padStart(2, '0')}
                  </div>
                  <IconButton
                    size='small'
                    onClick={() => openDeleteDialog(track.id)}
                    style={{ color: '#d32f2f' }}
                  >
                    <Trash2 size={18} />
                  </IconButton>
                </Box>
              ))
            : <p>No tracks in library</p>}
          </Box>
        </CardContent>
      </Card>

      <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Delete Track?</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this track?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog}>Cancel</Button>
          <Button onClick={handleDelete} color='error' variant='contained'>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
