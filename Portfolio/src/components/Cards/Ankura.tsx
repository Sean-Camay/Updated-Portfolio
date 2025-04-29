import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export const Ankura = () => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 140 }}
          image='../../../public/ankura-ai.png'
          title='ankura'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Ankura
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            Front End development for Ankura AI suite of products including
            Ankura Otter Analytics, Ankura GPT, Ankura Notes, Ankura Extractor.
            Tech stack: React, Vue, Typescript, and Tailwind CSS.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            onClick={() =>
              window.open('https://ankura.com/solutions/ankura-ai', '_blank')
            }
            sx={{
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            Ankura AI
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
