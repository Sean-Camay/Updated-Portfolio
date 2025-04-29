import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export const Ailevate = () => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 140 }}
          image='../../../public/ailevate-ai.png'
          title='ailevate'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Ailevate AI
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            Front End development for Ailevate AI, which is a webapp platform to
            help combat denied claims in hospitals. It is a an Ankura Company.
            Tech stack: React, Typescript, and Tailwind CSS.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            onClick={() => window.open('https://www.ailevate.com/', '_blank')}
            sx={{
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            Ailevate AI
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
