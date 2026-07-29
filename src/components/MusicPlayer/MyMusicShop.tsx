import React from 'react'
import { useTracklist } from '../../hooks/useTracklist'
import { useAdminPanel } from '../../hooks/useAdminPanel'
import {
  CircularProgress,
  Box,
  Card,
  CardContent,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { AdminLoginForm } from '../Forms/AdminLoginForm'
import { TrackUploadForm } from '../Forms/TrackUploadForm'
import { PlaylistDisplay } from '../Playlist/PlaylistDisplay'
import { SettingsIcon } from 'lucide-react'

interface MyMusicShopProps {
  loading: boolean
  error: string | null
  onTrackClick?: (trackId: string) => void
}

export const MyMusicShop = ({
  loading,
  error,
  onTrackClick,
}: MyMusicShopProps) => {
  const { tracks, fetchTracks } = useTracklist()
  const {
    loginError,
    isAuthenticated,
    logout,
    handleLogin,
    handleUpload,
    uploadError,
    uploadLoading,
    uploadSuccess,
    token,
  } = useAdminPanel()

  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(
    null,
  )

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorElement(null)
  }

  const handleUploadWithRefresh = async (
    file: File,
    title: string,
    artist: string,
    album: string,
  ) => {
    await handleUpload(file, title, artist, album)
    fetchTracks()
  }

  const handleTrackDelete = () => {
    fetchTracks()
  }

  if (loading) return <CircularProgress />
  if (error) return <div>Error loading tracks: {error}</div>

  return (
    <Box className='p-5 max-w-4xl mx-auto text-center'>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div className='text-black text-2xl font-bold'>My Music Shop</div>
        <IconButton
          onClick={handleMenuOpen}
          size='small'
          aria-controls='admin-menu'
          aria-haspopup='true'
        >
          <SettingsIcon />
        </IconButton>

        <Menu
          id='admin-menu'
          anchorEl={anchorElement}
          open={Boolean(anchorElement)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem
            disableRipple
            sx={{ display: 'block', p: 2, minWidth: '440px' }}
          >
            {!isAuthenticated ?
              <AdminLoginForm
                loading={false}
                error={loginError}
                onLogin={handleLogin}
                onCancel={handleMenuClose}
              />
            : <Box className='mb-5'>
                <p>✓ Logged in as admin</p>
                <Button
                  variant='outlined'
                  onClick={logout}
                  endIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              </Box>
            }
          </MenuItem>
        </Menu>
      </Box>

      <PlaylistDisplay
        tracks={tracks}
        authToken={token}
        onTrackDelete={handleTrackDelete}
        onTrackClick={onTrackClick}
      />

      {isAuthenticated && (
        <Card className='mt-7'>
          <CardContent>
            <h3>Upload New Track</h3>
            <TrackUploadForm
              loading={uploadLoading}
              error={uploadError}
              success={uploadSuccess}
              onUpload={handleUploadWithRefresh}
            />
          </CardContent>
        </Card>
      )}
    </Box>
  )
}
