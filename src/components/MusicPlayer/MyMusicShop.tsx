import { useState } from 'react'
import { useTracklist } from '../../hooks/useTracklist'
import { useAuth } from '../../hooks/useAuth'
import { useUploadTracks } from '../../hooks/useUploadTracks'
import {
  Button,
  TextField,
  CircularProgress,
  Box,
  Card,
  CardContent,
} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import LogoutIcon from '@mui/icons-material/Logout'
import { PlaylistPlayer } from './PlaylistPlayer'

export const MyMusicShop = () => {
  const { tracks, loading, error } = useTracklist()
  const { token, login, logout, isAuthenticated } = useAuth()
  const {
    uploadTracks,
    loading: uploadLoading,
    error: uploadError,
  } = useUploadTracks(token)

  const [showLogin, setShowLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState<string | null>(null)

  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadArtist, setUploadArtist] = useState('')
  const [uploadAlbum, setUploadAlbum] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleLogin = async () => {
    try {
      setLoginError(null)
      await login(username, password)
      setShowLogin(false)
      setUsername('')
      setPassword('')
    } catch (err) {
      setLoginError('Invalid username or password')
      throw err
    }
  }

  const handleUpload = async () => {
    if (!uploadFile) {
      setLoginError('Please select a file')
      return
    }

    const result = await uploadTracks(
      uploadFile,
      uploadTitle,
      uploadArtist,
      uploadAlbum,
    )
    if (result) {
      setUploadSuccess(true)
      setUploadFile(null)
      setUploadTitle('')
      setUploadArtist('')
      setUploadAlbum('')

      setTimeout(() => setUploadSuccess(false), 3000)
    }
  }

  if (loading) return <CircularProgress />
  if (error) return <div>Error loading tracks: {error}</div>

  return (
    <Box style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>My Music Shop</h1>
      {/* Player Section */}
      {tracks.length > 0 ?
        <Box style={{ marginBottom: '30px' }}>
          <PlaylistPlayer tracks={tracks} />
        </Box>
      : <Card style={{ marginBottom: '30px' }}>
          <CardContent>
            <p>No tracks available</p>
          </CardContent>
        </Card>
      }

      {/* Playlist Section */}
      <Card style={{ marginBottom: '30px' }}>
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
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                      {track.title}
                    </div>
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

      {/* Admin Section */}
      <Card>
        <CardContent>
          <h2>Admin Area</h2>

          {!isAuthenticated ?
            <Box>
              {!showLogin ?
                <Button
                  variant='contained'
                  onClick={() => setShowLogin(true)}
                  style={{ marginBottom: '20px' }}
                >
                  Admin Login
                </Button>
              : <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    maxWidth: '300px',
                  }}
                >
                  <TextField
                    label='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    size='small'
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  />
                  <TextField
                    label='Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size='small'
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  />
                  {loginError && (
                    <p style={{ color: '#d32f2f', margin: '0' }}>
                      {loginError}
                    </p>
                  )}
                  <Box style={{ display: 'flex', gap: '10px' }}>
                    <Button variant='contained' onClick={handleLogin}>
                      Login
                    </Button>
                    <Button
                      variant='outlined'
                      onClick={() => {
                        setShowLogin(false)
                        setLoginError(null)
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              }
            </Box>
          : <Box>
              <Box style={{ marginBottom: '20px' }}>
                <p style={{ margin: '0 0 10px 0' }}>✓ Logged in as admin</p>
                <Button
                  variant='outlined'
                  onClick={logout}
                  endIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              </Box>

              <hr style={{ margin: '20px 0' }} />

              <h3>Upload New Track</h3>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                <Box
                  style={{
                    border: '2px dashed #1976d2',
                    borderRadius: '4px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#f5f5f5',
                  }}
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  <CloudUploadIcon
                    style={{ fontSize: '40px', color: '#1976d2' }}
                  />
                  <p style={{ margin: '10px 0 0 0' }}>
                    {uploadFile ?
                      uploadFile.name
                    : 'Click to select audio file'}
                  </p>
                  <input
                    id='file-input'
                    type='file'
                    accept='audio/*'
                    onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
                    style={{ display: 'none' }}
                  />
                </Box>

                <TextField
                  label='Track Title'
                  placeholder='e.g., My Song'
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  size='small'
                />

                <TextField
                  label='Artist Name'
                  placeholder='e.g., Your Name'
                  value={uploadArtist}
                  onChange={(e) => setUploadArtist(e.target.value)}
                  size='small'
                />

                <TextField
                  label='Album Name'
                  placeholder='e.g., My Album'
                  value={uploadAlbum}
                  onChange={(e) => setUploadAlbum(e.target.value)}
                  size='small'
                />

                {uploadSuccess && (
                  <p style={{ color: '#2e7d32', margin: '0' }}>
                    ✓ Track uploaded successfully!
                  </p>
                )}

                {uploadError && (
                  <p style={{ color: '#d32f2f', margin: '0' }}>
                    Error: {uploadError}
                  </p>
                )}

                <Button
                  variant='contained'
                  onClick={handleUpload}
                  disabled={!uploadFile || uploadLoading || !isAuthenticated}
                  fullWidth
                  style={{ marginTop: '10px' }}
                >
                  {uploadLoading ? 'Uploading...' : 'Upload Track'}
                </Button>
              </Box>
            </Box>
          }
        </CardContent>
      </Card>
    </Box>
  )
}
