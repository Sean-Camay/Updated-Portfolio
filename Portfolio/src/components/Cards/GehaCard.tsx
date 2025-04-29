import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export const GehaCard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 280 }}
          image='../../../public/geha-image.png'
          title='mini pop'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            GEHA Solutions
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            A government employee healthcare company. Designed using SASS, CSS,
            and SXA through Sitecore.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            onClick={() => window.open('https://gehasolutions.com/', '_blank')}
            sx={{
              color: 'black',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            GEHA Solutions
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
