import { useEffect, useState } from 'react'
import { Track } from '../types/musicType'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

export const useTracklist = () => {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${API_BASE_URL}/tracks/`)
        setTracks(response.data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tracks')
        setTracks([])
      } finally {
        setLoading(false)
      }
    }

    fetchTracks()
  }, [])

  return { tracks, loading, error }
}
