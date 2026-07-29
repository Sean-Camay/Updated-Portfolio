import { useEffect, useState } from 'react'
import axios from 'axios'
import { Track } from '../../types/musicType'
import { DraggableTrackItem } from './DraggableTrackItem'
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

const API_BASE_URL = 'http://localhost:8000/api'

interface PlaylistDisplayProps {
  tracks: Track[]
  authToken?: string | null
  onTrackDelete?: (trackId: string) => void
  onTrackClick?: (trackId: string) => void
  onTrackReorder?: (tracks: Track[]) => void
}

export const PlaylistDisplay = ({
  tracks,
  authToken,
  onTrackDelete,
  onTrackClick,
  onTrackReorder,
}: PlaylistDisplayProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [trackToDelete, setTrackToDelete] = useState<string | null>(null)
  const [localTracks, setLocalTracks] = useState<Track[]>(tracks)

  useEffect(() => {
    setLocalTracks(tracks)
  }, [tracks])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = localTracks.findIndex((t) => t.id === active.id)
      const newIndex = localTracks.findIndex((t) => t.id === over.id)

      const reordered = arrayMove(localTracks, oldIndex, newIndex)
      setLocalTracks(reordered)
      onTrackReorder?.(reordered)
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
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={localTracks.map((t) => t.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {localTracks.map((track) => (
                    <DraggableTrackItem
                      key={track.id}
                      track={track}
                      onTrackClick={onTrackClick}
                      onDelete={openDeleteDialog}
                    />
                  ))}
                </SortableContext>
              </DndContext>
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
