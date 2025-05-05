import { Button, Typography } from '@mui/material'
import { Footer } from '../../components/Footer/FooterComponent'
import { Header } from '../../components/Header/HeaderComponent'
import { Container } from '@mui/system'

export const AnkuraWork = () => {
  return (
    <div className='bg-white w-screen h-screen'>
      <Header />

      <div className='flex flex-row bg-white'>
        <div className='flex flex-col ml-4 bg-white'>
          <div className='flex flex-row mb-4'>
            <h2 className='text-4xl font-bold mb-2 text-black'>Background</h2>
          </div>
          <div className='flex flex-row w-lg pb-4'>
            <div className='text-black'>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                {' '}
                <span className='font-bold text-xl'>Ankura AI</span> offers a
                secure, ethical suite—including a custom LLM, private assistant,
                computer vision, and integrated analytics—to accelerate and
                safeguard enterprise operations.
              </Typography>
            </div>
          </div>

          <div className='flex flex-row my-4'>
            <h2 className='text-4xl font-bold mb-2 text-black'>Role</h2>
          </div>
          <div className='flex flex-row w-lg'>
            <div className='text-black'>
              <div className='flex flex-row w-lg'>
                <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                  Led front-end development for Ankura’s AI suite—Otter
                  Analytics, GPT, Notes, and Extractor—using React, Vue,
                  TypeScript, and Tailwind CSS to build responsive, scalable UIs
                  and partner with product, design, and back-end teams to
                  translate complex AI workflows into clear interfaces.
                </Typography>
              </div>
            </div>
          </div>

          <div className='flex flex-row my-4'>
            <h2 className='text-4xl font-bold mb-2 text-black'>Projects</h2>
          </div>
          <div className='flex flex-row w-lg pb-4'>
            <div className='text-black'>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                {' '}
                <span className='font-bold text-xl'>Otter Analytics</span> is a
                patented AIOps platform that leverages machine learning to
                combat money laundering, detect fraud, and monitor operational
                health.
              </Typography>
            </div>
          </div>

          <div className='flex flex-row w-lg pb-4'>
            <div className='text-black'>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                {' '}
                <span className='font-bold text-xl'>Ankura GPT</span> is a
                secure, collaborative generative-AI platform powered by a
                multi-agent system that accelerates research, analysis, and
                tailored content creation for smarter, faster decision-making.
              </Typography>
            </div>
          </div>

          <div className='flex flex-row w-lg'>
            <div className='text-black'>
              <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                <span className='font-bold text-xl'>Ankura Notes</span> uses AI
                to transform meeting transcripts into customizable
                summaries—from executive takeaways and action items to detailed
                thematic breakdowns—so your team captures and acts on key
                insights.
              </Typography>
            </div>
          </div>

          <div className='flex flex-row mt-4 justify-center'>
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
