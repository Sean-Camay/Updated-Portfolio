import { Button, Typography } from '@mui/material'
import { Footer } from '../../components/Footer/FooterComponent'
import { Header } from '../../components/Header/HeaderComponent'
import { Container } from '@mui/system'

export const AnkuraWork = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen'>
      <Header />

      <div className='flex flex-row bg-white'>
        <div className='flex flex-col flex-auto items-center justify-center bg-white'>
          <div className='flex flex-row mb-4'>
            <h1 className='text-4xl font-bold mb-4 text-black'>Background</h1>
          </div>
          <div className='flex flex-row w-lg pb-4'>
            <p className='text-black'>
              <span className='font-bold text-xl'>Otter Analytics</span>{' '}
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                {' '}
                is a patented, proprietary platform that’s transforming how
                organizations harness and leverage data. Its AIOps solution uses
                machine learning to address critical business challenges such as
                anti-money laundering, fraud detection, and operational health
                monitoring.
              </Typography>
            </p>
          </div>

          <div className='flex flex-row w-lg pb-4'>
            <p className='text-black'>
              <span className='font-bold text-xl'>Ankura GPT</span>{' '}
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                {' '}
                Ankura AI’s secure, collaborative generative AI environment
                empowers your team to conduct research, perform analysis, and
                generate actionable content tailored to your firm’s specific
                needs. Powered by a unique multi-cognitive agent system, Ankura
                GPT accelerates the discovery of meaningful insights within your
                data—enabling faster, smarter, data-driven decision-making.
              </Typography>
            </p>
          </div>

          <div className='flex flex-row w-lg'>
            <p className='text-black'>
              <span className='font-bold text-xl'>Ankura Notes</span>{' '}
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                Meeting minutes made effortless—and far more powerful. Ankura
                Notes uses AI to transform meeting transcriptions into
                customized summaries tailored to your needs. Whether you need a
                high-level executive overview with key takeaways and action
                items, or an in-depth breakdown organized by themes, Notes helps
                your team capture, understand, and act on what matters most.
                Turn every meeting into a strategic advantage.
              </Typography>
            </p>
          </div>
          <div className='flex flex-row my-4'>
            <h1 className='text-4xl font-bold mb-4 text-black'>
              Responsibility
            </h1>
          </div>
          <div className='flex flex-row w-lg'>
            <p className='text-black'>
              <div className='flex flex-row w-lg'>
                <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                  Front-End Development for the Ankura AI Product Suite Led
                  front-end development across Ankura’s AI-driven product
                  ecosystem, including Otter Analytics, Ankura GPT, Ankura
                  Notes, and Ankura Extractor. Each product serves a distinct
                  purpose—ranging from advanced data analytics and generative AI
                  collaboration to intelligent transcription summarization and
                  automated data extraction. Leveraged a modern tech stack
                  consisting of React, Vue, TypeScript, and Tailwind CSS to
                  build responsive, scalable, and intuitive user interfaces.
                  Collaborated closely with product, design, and back-end teams
                  to deliver seamless user experiences and translate complex
                  data workflows into clear, actionable interfaces.
                </Typography>
              </div>
            </p>
          </div>

          <div className='flex flex-row'>
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

        <div className='flex flex-col flex-auto items-center bg-white mt-4'>
          <Container fixed>
            <img src='../../../public/ankura-ai.png' alt='ankura logo' />
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  )
}
