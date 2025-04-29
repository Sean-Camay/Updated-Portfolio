import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavigationComponent = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <Link to='/' className='mr-4'>
        <Button
          variant='text'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          Home
        </Button>
      </Link>
      <Link to='/about' className='mr-4'>
        <Button
          variant='text'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          About
        </Button>
      </Link>
      <Link to='/work' className='mr-4'>
        <Button
          variant='text'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          Work
        </Button>
      </Link>
      <Link to='/contact' className='mr-4'>
        <Button
          variant='text'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          Contact
        </Button>
      </Link>
    </div>
  );
};
