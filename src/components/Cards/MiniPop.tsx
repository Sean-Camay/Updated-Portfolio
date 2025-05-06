import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export const MiniPop = () => {
  return (
    <>
      <Card sx={{ maxWidth: 520, backgroundColor: '#FFFCF9' }}>
        <CardMedia
          sx={{ height: 280, width: 350 }}
          image='../../../public/mini-pop-image.jpg'
          title='mini pop'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Mini-Pop
          </Typography>
        </CardContent>
        <CardActions>
          <Link to='/mini-pop-work'>
            <Button
              size='small'
              sx={{
                color: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                },
              }}
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}
