import { useState } from 'react'
import { useAuth } from './useAuth'
import { useUploadTracks } from './useUploadTracks'

export const useAdminPanel = () => {
  const { token, login, logout, isAuthenticated } = useAuth()
  const {
    uploadTracks,
    loading: uploadLoading,
    error: uploadError,
  } = useUploadTracks(token)

  const [showLogin, setShowLogin] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleLogin = async (username: string, password: string) => {
    try {
      setLoginError(null)
      await login(username, password)
      setShowLogin(false)
    } catch {
      setLoginError('Invalid username or password')
    }
  }

  const handleUpload = async (
    file: File,
    title: string,
    artist: string,
    album: string,
  ) => {
    const result = await uploadTracks(file, title, artist, album)
    if (result) {
      setUploadSuccess(true)
      setTimeout(() => setUploadSuccess(false), 3000)
    }
  }

  return {
    showLogin,
    setShowLogin,
    loginError,
    isAuthenticated,
    logout,
    handleLogin,
    handleUpload,
    uploadError,
    uploadLoading,
    uploadSuccess,
  }
}
