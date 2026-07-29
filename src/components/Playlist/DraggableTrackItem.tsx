import { Box, IconButton } from '@mui/material'
import { Trash2, GripVertical } from 'lucide-react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Track } from '../../types/musicType'

interface DraggableTrackItemProps {
  track: Track
  onTrackClick?: (trackId: string) => void
  onDelete?: (trackId: string) => void
}

export const DraggableTrackItem = ({
  track,
  onTrackClick,
  onDelete,
}: DraggableTrackItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: track.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      sx={{
        padding: '12px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: isDragging ? 'grabbing' : 'grab',
        backgroundColor: isDragging ? '#f0f0f0' : 'transparent',
        transition: 'background-color 0.2s',
        gap: '8px',
      }}
    >
      {/* Drag Handle */}
      <Box
        {...listeners}
        style={{
          cursor: 'grab',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <GripVertical size={18} color='#999' />
      </Box>

      {/* Track Info */}
      <Box
        onClick={() => onTrackClick?.(track.id)}
        style={{
          cursor: onTrackClick ? 'pointer' : 'default',
          flex: 1,
        }}
      >
        <div style={{ fontWeight: 'bold' }}>{track.title}</div>
        <div style={{ fontSize: '12px', color: '#666' }}>
          {track.artist} • {track.album}
        </div>
      </Box>

      {/* Delete Button */}
      <IconButton
        size='small'
        onClick={() => onDelete?.(track.id)}
        style={{ color: '#d32f2f' }}
      >
        <Trash2 size={18} />
      </IconButton>
    </Box>
  )
}
