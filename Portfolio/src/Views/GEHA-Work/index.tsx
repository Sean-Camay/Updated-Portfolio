import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Header } from '../../components/Header/HeaderComponent'
import { Footer } from '../../components/Footer/FooterComponent'

export const GEHAWork = () => {
  return (
    <div className='bg-white w-screen h-screen'>
      <Header />

      <div className='flex flex-row bg-white'>
        <div className='flex flex-col ml-4 bg-white w-1/2'>
          <div className='flex flex-row mb-4'>
            <h2 className='text-4xl font-bold mb-2 text-black'>Background</h2>
          </div>

          <div className='flex flex-row w-lg pb-4'>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              <span className='font-bold text-xl'>GEHA </span>
              is a government employee healthcare company.
            </Typography>
          </div>

          <div className='flex flex-row my-4'>
            <h2 className='text-4xl font-bold mb-2 text-black'>Role</h2>
          </div>
          <div className='flex flex-row w-lg'>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              Developed and designed using Javascript, SASS, CSS, HTML, and SXA
              through Sitecore.
            </Typography>
          </div>

          <div className='flex flex-row justify-center mt-4'>
            <Button
              size='small'
              onClick={() =>
                window.open('https://gehasolutions.com/', '_blank')
              }
              sx={{
                color: 'black',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                },
              }}
            >
              Go To GEHA Solutions Website
            </Button>
          </div>
        </div>

        <div className='flex flex-col flex-auto items-center bg-white my-4 w-1/2'>
          <Container fixed>
            <img src='../../../public/geha-image.png' alt='GEHA' />
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  )
}
