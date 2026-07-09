import { Box, Card, CardContent } from '@mui/material'
import { Track } from '../../types/musicType'

interface PlaylistDisplayProps {
  tracks: Track[]
}

export const PlaylistDisplay = ({ tracks }: PlaylistDisplayProps) => {
  return (
    <Card className='mb-7'>
      <CardContent>
        <h2>Playlist ({tracks.length} tracks)</h2>
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
                <Box>
                  <div style={{ fontWeight: 'bold' }}>{track.title}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {track.artist} • {track.album}
                  </div>
                </Box>
                <div style={{ fontSize: '12px', color: '#999' }}>
                  {Math.floor(track.duration / 60)}:
                  {String(Math.floor(track.duration % 60)).padStart(2, '0')}
                </div>
              </Box>
            ))
          : <p>No tracks in playlist</p>}
        </Box>
      </CardContent>
    </Card>
  )
}
