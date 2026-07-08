import { useState, useRef, useEffect, useCallback } from 'react'
import { Box } from '@mui/material'

import { Track } from '../../types/musicType'
import { NowPlaying } from './NowPlaying'
import { PlaylistList } from './PlaylistList'

interface PlaylistPlayerProps {
  tracks: Track[]
}

export const PlaylistPlayer = ({ tracks }: PlaylistPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const currentTrack = tracks[currentTrackIndex]

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const skipNext = useCallback(() => {
    const nextIndex =
      currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1
    setCurrentTrackIndex(nextIndex)
    setIsPlaying(false)
  }, [currentTrackIndex, tracks.length])

  // Skip to previous track
  const skipPrevious = useCallback(() => {
    const prevIndex =
      currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1
    setCurrentTrackIndex(prevIndex)
    setIsPlaying(false)
  }, [currentTrackIndex, tracks.length])

  // Play selected track from playlist
  const playTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(false)
  }

  useEffect(() => {
    if (!audioRef.current || !currentTrack) return

    audioRef.current.src = currentTrack.url
    audioRef.current.load()

    if (isPlaying) {
      audioRef.current.play()
    }
  }, [currentTrack, isPlaying])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)

    audio.addEventListener('timeupdate', updateTime)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoadMetadata = () => {
      setDuration(audio.duration)
    }
    audio.addEventListener('loadedmetadata', onLoadMetadata)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadMetadata)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onEnded = () => {
      skipNext()
    }
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('ended', onEnded)
    }
  }, [currentTrackIndex, tracks.length, skipNext])

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return

    const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect()
    const clickX = event.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  if (!currentTrack || tracks.length === 0) {
    return <p>No tracks available</p>
  }

  return (
    <Box>
      <audio ref={audioRef} crossOrigin='anonymous' />

      <NowPlaying
        track={currentTrack}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onTogglePlay={togglePlay}
        onSkipNext={skipNext}
        onSkipPrevious={skipPrevious}
        onSeek={handleSeek}
      />

      <PlaylistList
        tracks={tracks}
        currentTrackIndex={currentTrackIndex}
        onSelectTrack={playTrack}
      />
    </Box>
  )
}
