import { Header } from '../../components/Header/HeaderComponent'
import { Footer } from '../../components/Footer/FooterComponent'
import { MainViewCard } from '../../components/Cards/MainViewCard'
// import { AppleMusicPlayer } from '../../components/MusicPlayer/AppleMusicPlayer'
import MySong from '../../assets/I_Woke_Up_On_This_Planet.mp3'
import SongTwo from '../../assets/Interlude.mp3'
import { Typography } from '@mui/material'
import { BoomBox } from '../../components/MusicPlayer/BoomBox'

export const MainView = () => {
  return (
    <>
      <Header />

      <div className='flex flex-row items-center justify-center bg-[#FFFCF9] w-screen h-screen'>
        {/* Left column */}
        <div className='flex flex-col items-center justify-center w-1/2'>
          {/* move this up before my photo */}
          <h1 className='text-4xl font-bold mt-4 text-[#1F2421]'>Sean Camay</h1>
          <MainViewCard />
        </div>

        {/* Right column */}
        {/* style this as a boom box */}
        <div className='flex flex-col items-center justify-center w-1/2'>
          <div className='mb-2 flex flex-col items-center'>
            <Typography variant='h5' sx={{ color: 'text.secondary' }}>
              Welcome to my page.
            </Typography>
            <Typography variant='h5' sx={{ color: 'text.secondary' }}>
              I'm Sean and I like to write code and write music.
            </Typography>
          </div>
          {/* <AppleMusicPlayer
            kind='album'
            id='1810347397'
            country='us'
            slug='i-woke-up-on-this-planet-single'
          /> */}
          <BoomBox playlist={[MySong, SongTwo]} />
        </div>
      </div>
      <Footer />
    </>
  )
}
