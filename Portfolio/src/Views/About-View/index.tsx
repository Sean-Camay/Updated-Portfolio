import { Header } from '../../components/Header/HeaderComponent';
import { Footer } from '../../components/Footer/FooterComponent';
import { Chip } from '@mui/material';

export const AboutView = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen'>
      <Header />

      <div className='flex flex-col items-center justify-center bg-white'>
        <div className='flex-row mb-4'>
          <h1 className='text-4xl font-bold mb-4 text-black'>Who Am I?</h1>
        </div>
        <div className='flex-row mb-4'>
          <p className='text-md text-gray-700 max-w-xl'>
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
          </p>
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
  );
};
