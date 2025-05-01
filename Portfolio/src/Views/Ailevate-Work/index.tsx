import { Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import { Footer } from '../../components/Footer/FooterComponent'
import { Header } from '../../components/Header/HeaderComponent'

export const AilevateWork = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen'>
      <Header />

      <div className='flex flex-row bg-white'>
        <div className='flex flex-col flex-auto items-center justify-center bg-white p-4'>
          <div className='flex flex-row mb-4'>
            <h1 className='text-4xl font-bold mb-4 text-black'>Background</h1>
          </div>

          <div className='flex flex-row w-lg pb-4'>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              <span className='font-bold text-xl'>Ailevate AI </span>
              is an AI-Powered Web Application to Reduce Denied Insurance Claims
              in Healthcare Designed and developed an AI-driven web application
              aimed at helping hospitals and healthcare providers significantly
              reduce the volume of denied insurance claims. The platform
              leverages machine learning and natural language processing to
              analyze patient records, billing data, and insurance guidelines in
              real time—identifying potential errors, missing information, or
              non-compliant codes before submission. By proactively flagging
              issues and offering corrective suggestions, the system streamlines
              the claims process, improves reimbursement rates, and reduces
              administrative burden—ultimately supporting better financial
              health for hospitals and more consistent care delivery for
              patients.
            </Typography>
          </div>

          <div className='flex flex-row my-4'>
            <h1 className='text-4xl font-bold mb-4 text-black'>
              Responsibility
            </h1>
          </div>
          <div className='flex flex-row w-lg'>
            <Typography variant='body1' sx={{ color: 'text.secondary' }}>
              Front-End Development for Ailevate AI (An Ankura Company) Led
              front-end development for Ailevate AI, a specialized web
              application platform designed to help hospitals reduce the volume
              of denied insurance claims. The platform uses AI and data-driven
              insights to identify potential errors and inconsistencies in
              real-time—enabling healthcare providers to correct issues before
              claims are submitted. This results in improved approval rates,
              reduced revenue loss, and streamlined administrative workflows.
              Built intuitive, responsive, and accessible user interfaces using
              React, TypeScript, and Tailwind CSS. Collaborated closely with
              designers, back-end engineers, and healthcare domain experts to
              translate complex data and compliance requirements into
              user-friendly features that empower clinical and billing teams.
            </Typography>
          </div>

          <div className='flex flex-row'>
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
          </div>
        </div>

        <div className='flex flex-col flex-auto items-center bg-white mt-4'>
          <Container fixed>
            <img src='../../../public/ailevate-ai.png' alt='ailevate logo' />
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  )
}
