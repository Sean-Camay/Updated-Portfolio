import { Button, TextField, Box } from '@mui/material'
import { CloudUploadIcon } from 'lucide-react'
import { useState } from 'react'

interface TrackUploadFormProps {
  loading: boolean
  error: string | null
  success: boolean
  onUpload: (
    file: File,
    title: string,
    artist: string,
    album: string,
  ) => Promise<void>
}

export const TrackUploadForm = ({
  loading,
  error,
  success,
  onUpload,
}: TrackUploadFormProps) => {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [album, setAlbum] = useState('')

  const handleUpload = async () => {
    if (file) {
      await onUpload(file, title, artist, album)
      setFile(null)
      setTitle('')
      setArtist('')
      setAlbum('')
    }
  }

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
        <CloudUploadIcon style={{ fontSize: '40px', color: '#1976d2' }} />
        <p>{file ? file.name : 'Click to select audio file'}</p>
        <input
          id='file-input'
          type='file'
          accept='audio/*'
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          style={{ display: 'none' }}
        />
      </Box>

      <TextField
        label='Track Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label='Artist Name'
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <TextField
        label='Album Name'
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
      />

      {success && (
        <p style={{ color: '#2e7d32' }}>✓ Track uploaded successfully!</p>
      )}
      {error && <p style={{ color: '#d32f2f' }}>Error: {error}</p>}

      <Button
        variant='contained'
        onClick={handleUpload}
        disabled={!file || loading}
        fullWidth
      >
        {loading ? 'Uploading...' : 'Upload Track'}
      </Button>
    </Box>
  )
}
