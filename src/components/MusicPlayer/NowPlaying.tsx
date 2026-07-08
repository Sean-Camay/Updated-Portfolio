import {
  Box,
  IconButton,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { Track } from '../../types/musicType'
import { formatTime } from '../../utils/timeFormatter'

interface NowPlayingProps {
  track: Track
  isPlaying: boolean
  currentTime: number
  duration: number
  onTogglePlay: () => void
  onSkipNext: () => void
  onSkipPrevious: () => void
  onSeek: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const NowPlaying = ({
  track,
  isPlaying,
  currentTime,
  duration,
  onTogglePlay,
  onSkipNext,
  onSkipPrevious,
  onSeek,
}: NowPlayingProps) => {
  return (
    <Card style={{ marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
      <CardContent>
        <h3>Now Playing</h3>

        <Box style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {track.title}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            {track.artist} • {track.album}
          </div>
        </Box>

        <Box
          style={{ marginBottom: '10px', cursor: 'pointer' }}
          onClick={onSeek}
        >
          <LinearProgress
            variant='determinate'
            value={duration ? (currentTime / duration) * 100 : 0}
            style={{ height: '8px', borderRadius: '4px' }}
          />
        </Box>

        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#999',
            marginBottom: '15px',
          }}
        >
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <IconButton onClick={onSkipPrevious} size='large'>
            <SkipPreviousIcon />
          </IconButton>

          <IconButton
            onClick={onTogglePlay}
            size='large'
            style={{
              backgroundColor: '#1976d2',
              color: 'white',
              width: '56px',
              height: '56px',
            }}
          >
            {isPlaying ?
              <PauseIcon />
            : <PlayArrowIcon />}
          </IconButton>

          <IconButton onClick={onSkipNext} size='large'>
            <SkipNextIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}
