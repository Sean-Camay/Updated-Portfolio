import { Button } from '@mui/material'
import { Footer } from '../../components/Footer/FooterComponent'
import { Header } from '../../components/Header/HeaderComponent'

export const AnkuraWork = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen'>
      <Header />

      <div className='flex flex-col items-center justify-center bg-white'>
        <div className='flex flex-row mb-4'>
          <h1 className='text-4xl font-bold mb-4 text-black'>Work</h1>
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
            Go to Ankura's Website
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
