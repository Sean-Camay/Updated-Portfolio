import AilevateImage from '../../assets/ailevate-ai.png'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

export const Ailevate = () => {
  return (
    <>
      <Card sx={{ maxWidth: 520, backgroundColor: '#FFFCF9' }}>
        <CardMedia
          sx={{ height: 140, width: 350 }}
          image={AilevateImage}
          title='ailevate'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Ailevate AI
          </Typography>
        </CardContent>
        <CardActions>
          <Link to='/ailevate-work'>
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
