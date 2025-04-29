import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const MiniPop = () => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 280 }}
          image='../../../public/mini-pop-image.jpg'
          title='mini pop'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Mini-Pop
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            A synth step sequencer and sampler. Built using Tone.js, React,
            Framer Motion, and Start Audio Context
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            onClick={() =>
              window.open('https://mini-pop.netlify.app/', '_blank')
            }
            sx={{
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            Mini-Pop
          </Button>
          <Button
            size='small'
            onClick={() =>
              window.open(
                'https://github.com/Sean-Camay/unit-4-project-mini-pop',
                '_blank'
              )
            }
            sx={{
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
