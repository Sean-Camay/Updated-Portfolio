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
import CloseIcon from '@mui/icons-material/Close'
import { Track } from '../../types/musicType'
import { formatTime } from '../../utils/timeFormatter'

interface NowPlayingProps {
  track: Track
  isPlaying: boolean
  currentTime: number
  duration: number
  onTogglePlay: () => void
  onClose: () => void
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
  onClose,
}: NowPlayingProps) => {
  return (
    <Card
      style={{
        marginBottom: '20px',
        backgroundColor: '#080404',
        paddingBottom: 0,
      }}
    >
      <CardContent>
        <Box
          style={{ marginBottom: '2px', cursor: 'pointer' }}
          onClick={onSeek}
        >
          <LinearProgress
            variant='determinate'
            value={duration ? (currentTime / duration) * 100 : 0}
            style={{ height: '4px', borderRadius: '4px', color: '#ffffff' }}
          />
        </Box>
        <Box style={{ marginBottom: '2px' }}>
          <div className='flex flex-row items-center'>
            <div className='font-bold text-lg text-[#ffffff] pr-1'>
              {track.title} -{' '}
            </div>
            <div className='text-[#979393] text-sm'>
              {track.artist} • {track.album}
            </div>
          </div>
        </Box>

        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#999',
            marginBottom: '2px',
          }}
        >
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </Box>

        <Box
          style={{
            display: 'flex',
            justifyContent: 'end',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={onSkipPrevious}
            size='small'
            style={{
              color: 'white',
              border: '1px solid white',
              borderRadius: '10%',
            }}
          >
            <SkipPreviousIcon />
          </IconButton>

          <IconButton
            onClick={onTogglePlay}
            size='small'
            style={{
              color: 'white',
              border: '1px solid white',
              borderRadius: '10%',
            }}
          >
            {isPlaying ?
              <PauseIcon />
            : <PlayArrowIcon />}
          </IconButton>

          <IconButton
            onClick={onSkipNext}
            size='small'
            style={{
              color: 'white',
              border: '1px solid white',
              borderRadius: '10%',
            }}
          >
            <SkipNextIcon />
          </IconButton>
          <IconButton
            onClick={onClose}
            size='small'
            style={{
              color: 'white',
              border: '1px solid white',
              borderRadius: '10%',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}
