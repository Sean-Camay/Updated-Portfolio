import { Box, Card, CardContent } from '@mui/material'
import { Track } from '../../types/musicType'
import { formatTime } from '../../utils/timeFormatter'

interface PlaylistListProps {
  tracks: Track[]
  currentTrackIndex: number
  onSelectTrack: (index: number) => void
  authToken?: string | null
  onTrackDelete?: (trackId: string) => void
}

export const PlaylistList = ({
  tracks,
  currentTrackIndex,
  onSelectTrack,
}: PlaylistListProps) => {
  return (
    <Card>
      <CardContent>
        <h3>Playlist ({tracks.length} tracks)</h3>
        <Box style={{ maxHeight: '500px', overflowY: 'auto' }}>
          {tracks.map((track, index) => (
            <Box
              key={track.id}
              onClick={() => onSelectTrack(index)}
              style={{
                padding: '12px',
                borderBottom: '1px solid #e0e0e0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor:
                  index === currentTrackIndex ? '#e3f2fd' : 'transparent',
                fontWeight: index === currentTrackIndex ? 'bold' : 'normal',
                color: index === currentTrackIndex ? '#1976d2' : 'inherit',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) => {
                if (index !== currentTrackIndex) {
                  ;(e.currentTarget as HTMLElement).style.backgroundColor =
                    '#f5f5f5'
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentTrackIndex) {
                  ;(e.currentTarget as HTMLElement).style.backgroundColor =
                    'transparent'
                }
              }}
            >
              <Box style={{ flex: 1 }}>
                <div style={{ fontSize: '14px' }}>
                  {index + 1}. {track.title}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {track.artist} • {track.album}
                </div>
              </Box>
              <div
                style={{ fontSize: '12px', color: '#999', marginLeft: '10px' }}
              >
                {formatTime(track.duration)}
              </div>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
