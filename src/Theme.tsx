import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'

// Create the theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2421', // Your custom primary color
    },
  },
})

// Create a ThemeProvider component to use in your app
interface ThemeProps {
  children: ReactNode
}

export const CustomThemeProvider = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

// Also export the theme in case you need access to it elsewhere
export { theme }
