import { useEffect, useState, useRef, useCallback } from 'react'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { IconButton } from '@mui/material'
import './BoomBox.css'

interface BoomBoxProps {
  playlist: string[]
}

export const BoomBox = ({ playlist }: BoomBoxProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const knobRef = useRef<HTMLDivElement>(null)

  const currentUrl = playlist[currentTrack]

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const prevTrack = () => {
    setCurrentTrack((idx) => {
      const prev = idx === 0 ? playlist.length - 1 : idx - 1
      return prev
    })
    setIsPlaying(false)
  }

  const nextTrack = () => {
    setCurrentTrack((idx) => {
      const next = idx === playlist.length - 1 ? 0 : idx + 1
      return next
    })
    setIsPlaying(false)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.src = currentUrl
    audio.load()
    if (isPlaying) audio.play()
  }, [currentUrl, isPlaying])

  // When metadata loads, grab duration
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onLoaded = () => setDuration(audio.duration)
    audio.addEventListener('loadedmetadata', onLoaded)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded)
    }
  }, [])

  // Update progress as the track plays
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    let animationFrameId: number

    const update = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
      animationFrameId = requestAnimationFrame(update)
    }

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(update)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPlaying])

  const seek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return

    const rect = (event.target as HTMLDivElement).getBoundingClientRect()
    const clickX = event.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    audioRef.current.currentTime = newTime
    setProgress((newTime / duration) * 100)
  }

  const setAudioVolume = (vol: number) => {
    const audio = audioRef.current
    if (audio) audio.volume = vol
    setVolume(vol)
  }

  const onKnobPointerMove = useCallback((event: PointerEvent) => {
    const knob = knobRef.current
    if (!knob) return
    const rect = knob.getBoundingClientRect()
    const dx = event.clientX - (rect.left + rect.width / 2)
    const dy = event.clientY - (rect.top + rect.height / 2)
    let angle = Math.atan2(dy, dx) * (180 / Math.PI)
    angle = Math.max(-135, Math.min(135, angle))
    const volume = (angle + 135) / 270
    setAudioVolume(volume)
  }, [])

  const onKnobPointerUp = useCallback(() => {
    document.removeEventListener('pointermove', onKnobPointerMove)
    document.removeEventListener('pointerup', onKnobPointerUp)
  }, [onKnobPointerMove])

  const onKnobPointerDown = (event: React.PointerEvent) => {
    event.preventDefault()
    document.addEventListener('pointermove', onKnobPointerMove)
    document.addEventListener('pointerup', onKnobPointerUp)
  }

  useEffect(() => {
    setAudioVolume(volume)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='w-full max-w-md mx-auto p-6 bg-gray-800 rounded-2xl shadow-2xl text-gray-100'>
      {/* Top Bar */}
      <div className='flex flex-row justify-center text-xl font-bold'>
        My Music
      </div>

      {/* Speakers Tape Deck */}
      <div className='flex justify-between items-center mb-4'>
        {/* Left Speaker */}
        <div className='w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center relative speaker-container'>
          {/* <div
            className={`w-12 h-12 bg-gray-600 rounded-full ${
              isPlaying ? 'speaker-pulse' : ''
            }`}
          > */}
          <div className={`speaker-inner ${isPlaying ? 'speaker-pulse' : ''}`}>
            <div className='speaker-grid'></div>
          </div>
        </div>

        {/* Center Tape Deck */}
        <div className='flex-1 mx-4 bg-gray-700 h-20 rounded-lg flex flex-col justify-center'>
          {/* Progress Bar */}
          <div className='flex justify-center pb-2'>
            Track {currentTrack + 1} / {playlist.length}
          </div>
          <div
            className='h-2 bg-gray-600 rounded cursor-pointer'
            onClick={seek}
          >
            <div
              className='h-full bg-[#FFFCF9] rounded'
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Right Speaker */}
        <div className='w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center relative speaker-container'>
          {/* <div
            className={`w-12 h-12 bg-gray-600 rounded-full ${
              isPlaying ? 'speaker-pulse-delayed' : ''
            }`}
          > */}
          <div
            className={`speaker-inner ${
              isPlaying ? 'speaker-pulse-delayed' : ''
            }`}
          >
            <div className='speaker-grid'></div>
          </div>
        </div>
      </div>

      {/* volume knob */}
      <div className='flex justify-center mt-4'>
        <div
          ref={knobRef}
          onPointerDown={onKnobPointerDown}
          className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center relative touch-none select-none cursor-pointer'
        >
          {/* Knob Indicator */}
          <div
            className='w-1 h-6 bg-[#FFFCF9] rounded-full origin-bottom'
            style={{
              transform: `rotate(${volume * 270 - 135}deg)`,
            }}
          />
        </div>
      </div>

      {/* Play Controls */}
      <div className='flex justify-between items-center mt-4'>
        <div className='flex space-x-2'>
          <IconButton
            aria-label='chevron-left'
            onClick={prevTrack}
            sx={{
              color: '#FFFCF9',
              backgroundColor: '#1F2421',
              '&.hover': {
                backgroundColor: '#1F2421',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <IconButton
          aria-label={isPlaying ? 'Pause' : 'Play'}
          onClick={togglePlay}
          sx={{
            color: '#FFFCF9',
            backgroundColor: '#1F2421',
            '&.hover': {
              backgroundColor: '#1F2421',
            },
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <IconButton
          aria-label='chevron-right'
          onClick={nextTrack}
          sx={{
            color: '#FFFCF9',
            backgroundColor: '#1F2421',
            '&.hover': {
              backgroundColor: '#1F2421',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>

      {/* Hidden Audio element */}
      <audio ref={audioRef} src={currentUrl} preload='metadata' />
    </div>
  )
}
