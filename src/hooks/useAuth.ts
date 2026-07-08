import { useState } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api'

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (username: string, password: string) => {
    try {
      setLoading(true)

      const response = await axios.post(`${API_BASE_URL}/auth/login/`, {
        username,
        password,
      })

      const { access_token } = response.data
      setToken(access_token)
      localStorage.setItem('auth_token', access_token)
      setError(null)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('auth_token')
  }

  return { token, loading, error, login, logout, isAuthenticated: !!token }
}
