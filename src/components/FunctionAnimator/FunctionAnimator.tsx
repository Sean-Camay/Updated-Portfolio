import { useEffect, useRef, useState } from 'react'
import { IconButton, Slider, Box } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { PauseIcon } from 'lucide-react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'

interface FunctionAnimatorProps {
  audioUrl: string
  typingSpeed?: number
}

const codeString = `const playMusic = () => {
const audio = new Audio('" + audioUrlPlaceholder + "');}`

export const FunctionAnimator = ({
  audioUrl,
  typingSpeed,
}: FunctionAnimatorProps) => {
  const [displayed, setDisplayed] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.75)
  const audioRef = useRef<HTMLAudioElement>(null)
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const indexRef = useRef(0)

  useEffect(() => {
    setDisplayed('')
    setTypingDone(false)
    indexRef.current = 0

    const finalCode = codeString.replace(
      '" + audioUrlPlaceholder + "',
      audioUrl
    )
    const typeNext = () => {
      if (indexRef.current < finalCode.length) {
        setDisplayed(finalCode.substring(0, indexRef.current + 1))
        indexRef.current++
        typingTimerRef.current = setTimeout(typeNext, typingSpeed)
      } else {
        setTypingDone(true)
      }
    }

    typeNext()

    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current)
      }
    }
  }, [audioUrl, typingSpeed])

  useEffect(() => {
    if (typingDone && audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [typingDone])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const volumeChange = (_event: Event, newValue: number | number[]) => {
    const newVolume = newValue as number
    setVolume(newVolume)
  }

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeMuteIcon fontSize='small' />
    if (volume < 0.5) return <VolumeDownIcon fontSize='small' />
    return <VolumeUpIcon fontSize='small' />
  }

  return (
    <div className='p-4 bg-[#1F2421] rounded-lg text-gray-100 font-mono whitespace-pre-wrap'>
      <pre>{displayed}</pre>
      {typingDone && (
        <div className='mt-4'>
          <div className='flex items-center justify-center'>
            <IconButton
              aria-label={isPlaying ? 'pause' : 'play'}
              onClick={togglePlayPause}
              sx={{
                backgroundColor: '#FFFCF9',
                color: '#1F2421',
                borderRadius: '50px',
                borderColor: 'black',
                padding: '10px 20px',
                '&:hover': {
                  backgroundColor: '#1F2421',
                  borderColor: 'white',
                  color: 'white',
                },
              }}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </div>
          <Box className='flex items-center px-2 mt-2'>
            <IconButton
              onClick={() => setVolume(volume > 0 ? 0 : 0.5)}
              sx={{ color: '#FFFCF9' }}
            >
              {getVolumeIcon()}
            </IconButton>

            <Slider
              size='small'
              value={volume}
              onChange={volumeChange}
              aria-label='Volume'
              min={0}
              max={1}
              step={0.01}
              sx={{
                mx: 1,
                color: '#FFFCF9',
                '& .MuiSlider-thumb': {
                  width: 12,
                  height: 12,
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0px 0px 0px 8px rgba(255, 252, 249, 0.16)',
                  },
                },
              }}
            />
          </Box>
        </div>
      )}
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  )
}
