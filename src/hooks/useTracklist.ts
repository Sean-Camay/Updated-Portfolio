import { useCallback, useEffect, useState } from 'react'
import { Track } from '../types/musicType'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'
const API_BASE = 'http://localhost:8000'

export const useTracklist = () => {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchTracks = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE_URL}/tracks/`)
      const tracksWithFullUrls = response.data.map((track: Track) => ({
        ...track,
        url:
          track.url.startsWith('http') ? track.url : `${API_BASE}${track.url}`,
      }))
      setTracks(tracksWithFullUrls)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch tracks')
      setTracks([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTracks()
  }, [fetchTracks])

  return { tracks, loading, error, fetchTracks }
}
