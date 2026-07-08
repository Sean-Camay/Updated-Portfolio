import { useState } from 'react'
import axios from 'axios'
import { Track } from '../types/musicType'

const API_BASE_URL = 'http://localhost:8000/api'

export const useUploadTracks = (token: string | null) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const uploadTracks = async (
    file: File,
    title: string,
    artist: string,
    album: string,
  ): Promise<Track | null> => {
    if (!token) {
      setError('You must be logged in to upload tracks')
      return null
    }

    try {
      setLoading(true)

      const formData = new FormData()
      formData.append('file', file)
      formData.append('title', title)
      formData.append('artist', artist)
      formData.append('album', album)

      const response = await axios.post(
        `${API_BASE_URL}/tracks/upload/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      setError(null)
      return response.data as Track
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed'
      setError(message)
      return null
    } finally {
      setLoading(false)
    }
  }
  return { loading, error, uploadTracks }
}
