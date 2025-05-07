import AilevateImage from '../../assets/ailevate-ai.png'
import { Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import { Footer } from '../../components/Footer/FooterComponent'
import { Header } from '../../components/Header/HeaderComponent'

export const AilevateWork = () => {
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
              <span className='font-bold text-xl'>Ailevate AI </span>
              is an AI-powered web app for hospitals that analyzes records and
              insurance rules in real time, flags errors, and suggests fixes to
              streamline claims, boost reimbursements, and cut administrative
              burden.
            </Typography>
          </div>

          <div className='flex flex-row my-4'>
            <h2 className='text-4xl font-bold mb-2 text-black'>Role</h2>
          </div>
          <div className='flex flex-row w-lg'>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              Led front-end development for Ailevate AI—an Ankura platform that
              uses AI-driven insights to spot and fix claim errors in real time.
              Built responsive, accessible UIs with React, TypeScript, and
              Tailwind CSS, partnering with designers, engineers, and healthcare
              experts to boost approval rates and streamline workflows.
            </Typography>
          </div>

          <div className='flex flex-row justify-center mt-4'>
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
              Go to Ailevate's Website
            </Button>
          </div>
        </div>

        <div className='flex flex-col flex-auto items-center bg-[#FFFCF9] mt-4 w-1/2'>
          <Container fixed>
            <img src={AilevateImage} alt='ailevate logo' />
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  )
}
