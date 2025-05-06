import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Header } from '../../components/Header/HeaderComponent'
import { Footer } from '../../components/Footer/FooterComponent'

export const MiniPopWork = () => {
  return (
    <div className='bg-[#FFFCF9] w-screen h-screen'>
      <Header />

      <div className='flex flex-row bg-[#FFFCF9]'>
        <div className='flex flex-col ml-4 bg-[#FFFCF9] w-1/2'>
          <div className='flex flex-row mb-4'>
            <h2 className='text-4xl font-bold mb-2 text-black'>Background</h2>
          </div>

          <div className='flex flex-row w-lg pb-4'>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              <span className='font-bold text-xl'>Mini Pop </span>
              is a web app synthesizer and sequencer that allows you to create a
              sequence of sounds, change the BPM by tapping or entering a value,
              change key, and create chords.
            </Typography>
          </div>

          <div className='flex flex-row my-4'>
            <h2 className='text-4xl font-bold mb-2 text-black'>Role</h2>
          </div>
          <div className='flex flex-row w-lg'>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              Developed and built the Mini Pop web app with React, Tone.js,
              Framer Motion, and Start Audio Context.
            </Typography>
          </div>

          <div className='flex flex-row justify-center mt-4'>
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
              Mini-Pop Web App
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
          </div>
        </div>

        <div className='flex flex-col flex-auto items-center bg-[#FFFCF9] my-4 w-1/2'>
          <Container fixed>
            <img src='../../../public/mini-pop-image.jpg' alt='mini pop' />
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  )
}
