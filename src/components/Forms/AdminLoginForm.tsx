import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await onLogin(username, password)
    setUsername('')
    setPassword('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '300px',
      }}
    >
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
          disabled={loading}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: '#d32f2f' }}>{error}</p>}
        <Box style={{ display: 'flex', gap: '10px' }}>
          <Button type='submit' disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
          <Button variant='outlined' onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  )
}
