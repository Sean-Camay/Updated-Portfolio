import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

interface AdminLoginFormProps {
  loading: boolean
  error: string | null
  onLogin: (username: string, password: string) => Promise<void>
  onCancel: () => void
}

export const AdminLoginForm = ({
  loading,
  error,
  onLogin,
  onCancel,
}: AdminLoginFormProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await onLogin(username, password)
    setUsername('')
    setPassword('')
  }

  return (
    <Box
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
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <TextField
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />
      {error && <p style={{ color: '#d32f2f' }}>{error}</p>}
      <Box style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
        <Button variant='outlined' onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  )
}
