import { Button } from '@mui/material'

interface BasicButtonProps {
  title: string
}

export const BasicButton = ({ title }: BasicButtonProps) => {
  return (
    <Button
      variant='text'
      sx={{
        backgroundColor: '#FFFCF9',
        color: '#1F2421',
        borderRadius: '50px',
        padding: '10px 20px',
        '&:hover': {
          backgroundColor: '#1F2421',
          color: 'white',
        },
      }}
    >
      {title}
    </Button>
  )
}
