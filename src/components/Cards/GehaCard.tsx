import GEHAImage from '../../assets/geha-image.png'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

export const GehaCard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 520, backgroundColor: '#FFFCF9' }}>
        <CardMedia
          sx={{ height: 280, width: 350 }}
          image={GEHAImage}
          title='mini pop'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            GEHA Solutions
          </Typography>
        </CardContent>
        <CardActions>
          <Link to='/geha-work'>
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
