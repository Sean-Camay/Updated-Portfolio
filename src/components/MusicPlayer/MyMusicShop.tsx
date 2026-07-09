import { useTracklist } from '../../hooks/useTracklist'
import { useAdminPanel } from '../../hooks/useAdminPanel'
import { CircularProgress, Box, Card, CardContent, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { PlaylistPlayer } from './PlaylistPlayer'
import { AdminLoginForm } from '../Forms/AdminLoginForm'
import { TrackUploadForm } from '../Forms/TrackUploadForm'
import { PlaylistDisplay } from '../Playlist/PlaylistDisplay'

export const MyMusicShop = () => {
  const { tracks, loading, error } = useTracklist()
  const {
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
  } = useAdminPanel()

  if (loading) return <CircularProgress />
  if (error) return <div>Error loading tracks: {error}</div>

  if (loading) return <CircularProgress />
  if (error) return <div>Error loading tracks: {error}</div>

  return (
    <Box className='p-5 max-w-4xl mx-auto text-center mb-12'>
      <div className='text-black text-center text-2xl font-bold mb-4'>
        My Music Shop
      </div>

      {tracks.length > 0 ?
        <Box className='mb-7'>
          <PlaylistPlayer tracks={tracks} />
        </Box>
      : <Card className='mb-7'>
          <CardContent>
            <p className='text-black text-center'>No tracks available</p>
          </CardContent>
        </Card>
      }

      <PlaylistDisplay tracks={tracks} />

      <Card>
        <CardContent>
          <h2>Admin Area</h2>
          {!isAuthenticated ?
            <>
              {!showLogin ?
                <Button
                  variant='contained'
                  onClick={() => setShowLogin(true)}
                  className='mb-5'
                >
                  Admin Login
                </Button>
              : <AdminLoginForm
                  loading={false}
                  error={loginError}
                  onLogin={handleLogin}
                  onCancel={() => setShowLogin(false)}
                />
              }
            </>
          : <>
              <Box className='mb-5'>
                <p>✓ Logged in as admin</p>
                <Button
                  variant='outlined'
                  onClick={logout}
                  endIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              </Box>
              <hr className='my-5' />
              <h3>Upload New Track</h3>
              <TrackUploadForm
                loading={uploadLoading}
                error={uploadError}
                success={uploadSuccess}
                onUpload={handleUpload}
              />
            </>
          }
        </CardContent>
      </Card>
    </Box>
  )
}
