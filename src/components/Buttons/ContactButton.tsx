import { Button } from '@mui/material'

interface ContactButtonProps {
  title: string
  link?: string
  icon?: React.ReactNode
  clickEvent?: React.MouseEventHandler<HTMLButtonElement>
}
export const ContactButton = ({
  title,
  link,
  icon,
  clickEvent,
}: ContactButtonProps) => {
  return (
    <Button
      variant='outlined'
      endIcon={icon}
      href={link}
      onClick={clickEvent}
      sx={{
        backgroundColor: '#FFFCF9',
        color: 'black',
        borderRadius: '50px',
        borderColor: 'black',
        padding: '10px 20px',
        '&:hover': {
          backgroundColor: 'black',
          borderColor: 'white',
          color: 'white',
        },
      }}
    >
      {title}
    </Button>
  )
}
