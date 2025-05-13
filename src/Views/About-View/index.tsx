import { Header } from '../../components/Header/HeaderComponent'
import { Footer } from '../../components/Footer/FooterComponent'
import { SpinningRecord } from '../../components/SpinningRecord/SpinningRecord'
import { FunctionAnimator } from '../../components/FunctionAnimator/FunctionAnimator'
import ShowtimeSong from '../../assets/And_Now_Its_Showtime.mp3'
import { Chip, Typography } from '@mui/material'

export const AboutView = () => {
  return (
    <div className='bg-[#FFFCF9] w-screen h-screen overflow-y-auto'>
      <Header />

      <div className='flex flex-col items-center justify-center bg-[#FFFCF9] px-4'>
        <div className='w-full max-w-6xl'>
          <h1 className='text-4xl font-bold mb-8 text-black text-center'>
            From Vinyl to Variables
          </h1>
        </div>

        <div className='flex flex-row w-full justify-between items-center mb-8 gap-12'>
          <div className='w-1/3 flex justify-center'>
            <SpinningRecord />
          </div>

          <div className='w-2/3 flex justify-center'>
            <FunctionAnimator audioUrl={ShowtimeSong} typingSpeed={80} />
          </div>
        </div>

        <div className='flex-row my-4 w-full max-w-6xl'>
          <Typography
            variant='body1'
            sx={{ color: 'text.primary', width: '100%' }}
          >
            Sean Camay is a New York City–based Front-End Developer with a
            passion for building modern, scalable web applications that elevate
            user experience and drive meaningful outcomes. Originally from
            Ithaca, NY, Sean studied communications and business at Ithaca
            College before beginning his career in multimedia production. His
            curiosity about how digital tools are made led him to transition
            into software engineering, formalized through a full-time immersive
            bootcamp at General Assembly. Sean has since developed sophisticated
            UI solutions for clients across finance, government, and enterprise
            sectors. At Ankura, he played a key role in building AI-powered
            investigative tools—like Otter Analytics and Revenue Recovery—used
            by major clients including State Farm and Boeing. His work has been
            recognized by Reuters, PR Newswire, and Consulting.us for its
            innovation and impact. Sean thrives in agile, cross-functional teams
            and is known for crafting responsive interfaces, designing data
            visualizations for risk analysis, and iterating quickly on feedback.
            His tech stack includes React, TypeScript, Vue, Tailwind, and
            various state management and routing frameworks. With a keen eye for
            design and a love of music, Sean still draws creative inspiration
            from his background in audio engineering and his ever-growing vinyl
            collection. He believes great software, like great art, is all about
            clarity, intention, and thoughtful execution.
          </Typography>
        </div>
        <div className='flex-row mb-4'>
          <h1 className='text-4xl font-bold mb-4 text-black'>Tech Stack</h1>
        </div>

        <div className='flex-row justify-center mb-4'>
          <Chip
            label='Javascript/HTML/CSS'
            variant='outlined'
            className='m-2'
          />
          <Chip label='React' variant='outlined' className='m-2' />
          <Chip label='Vue.js' variant='outlined' className='m-2' />
          <br />
          <Chip label='Typescript' variant='outlined' className='m-2' />
          <Chip label='Tailwind' variant='outlined' className='m-2' />
          <Chip label='AI Programming' variant='outlined' className='m-2' />
          <br />
          <Chip label='Git' variant='outlined' className='m-2' />
          <Chip label='Vite' variant='outlined' className='m-2' />
          <Chip label='RESTful API' variant='outlined' className='m-2' />
          <br />
          <Chip label='Quasar' variant='outlined' className='m-2' />
          <Chip label='Azure Dev Ops' variant='outlined' className='m-2' />
          <Chip label='Jira' variant='outlined' className='m-2' />
          <br />
          <Chip label='OOP' variant='outlined' className='m-2' />
          <Chip
            label='Functional Programming'
            variant='outlined'
            className='m-2'
          />
          <Chip label='Slack' variant='outlined' className='m-2' />
          <Chip label='Microsoft Suite' variant='outlined' className='m-2' />
        </div>
      </div>

      <Footer />
    </div>
  )
}
