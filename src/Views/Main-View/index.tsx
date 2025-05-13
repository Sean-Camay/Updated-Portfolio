import { Header } from '../../components/Header/HeaderComponent'
import { Footer } from '../../components/Footer/FooterComponent'
import { MainViewCard } from '../../components/Cards/MainViewCard'
import SongOne from '../../assets/I_Woke_Up_On_This_Planet.mp3'
import SongTwo from '../../assets/Interlude.mp3'
import { Typography } from '@mui/material'
import { BoomBox } from '../../components/MusicPlayer/BoomBox'
import { NamePlate } from '../../components/NamePlate/NamePlate'

export const MainView = () => {
  return (
    <div className='h-screen overflow-hidden flex flex-col'>
      <Header />

      <div className='flex-grow flex flex-row items-center justify-center bg-[#FFFCF9] w-screen h-screen pb-4'>
        <div className='flex flex-row justify-between items-end w-full px-4 max-w-6xl'>
          {/* Left column */}
          <div className='flex flex-col items-center justify-center w-1/2 h-full'>
            <div className='flex-grow flex items-center justify-center h-full'>
              <MainViewCard style={{ height: '34em' }} />
            </div>
          </div>

          {/* Right column */}
          <div className='flex flex-col items-start justify-center w-1/2'>
            <div className='mb-20 flex flex-col items-start'>
              <Typography variant='h3' sx={{ color: 'text.primary' }}>
                Welcome to my page
              </Typography>

              <NamePlate name='Sean Camay' margin='mb-2' />

              <Typography variant='h5' sx={{ color: 'text.secondary' }}>
                I like to write code and write music.
              </Typography>
            </div>

            <BoomBox playlist={[SongOne, SongTwo]} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
