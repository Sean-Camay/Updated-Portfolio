import { Header } from '../../components/Header/HeaderComponent'
import { Footer } from '../../components/Footer/FooterComponent'
import { SpinningRecord } from '../../components/SpinningRecord/SpinningRecord'
import { FunctionAnimator } from '../../components/FunctionAnimator/FunctionAnimator'
import ShowtimeSong from '../../assets/And_Now_Its_Showtime.mp3'
import { Chip, Typography } from '@mui/material'

export const AboutView = () => {
  return (
    <div className='bg-[#FFFCF9] w-screen h-screen'>
      <Header />

      <div className='flex flex-col items-center justify-center bg-[#FFFCF9]'>
        <div className='flex-row mb-4'>
          <h1 className='text-4xl font-bold mb-4 text-black'>
            From Vinyl to Variables
          </h1>
        </div>
        <div className='flex flex-row w-full max-w-6xl justify-between items-center px-4 mb-8'>
          <div className='flex-1'>
            <SpinningRecord />
          </div>

          <div className='flex-1 ml-8'>
            <FunctionAnimator audioUrl={ShowtimeSong} typingSpeed={80} />
          </div>
        </div>
        <div className='flex-row my-4'>
          <Typography
            variant='body1'
            sx={{ color: 'text.primary', width: '40em' }}
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
          {/* <p className='text-md text-gray-700 max-w-xl'>
            Raised in Ithaca, NY, Sean Camay is a Front End Developer and Audio
            Engineer, living and working in New York City. Sean attended the
            Park School at Ithaca College where he studied communications and
            business. After graduation he worked in production at various
            multimedia firms in New York City. After running websites for
            clients, he became curious on how software is made and designed, and
            started experimenting on his own. After a couple of years of this,
            he opted to formalize this training by attending a bootcamp devoted
            to software engineering. He now works combining his passions making
            software for the arts. In his spare time, Sean enjoys hunting for
            vintage vinyl records to add to his ever growing collection. Sean
            believes in drawing from the past to learn and influence his
            designs. He aspires to create a positive, open-minded atmosphere
            everywhere he goes.
          </p> */}
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
