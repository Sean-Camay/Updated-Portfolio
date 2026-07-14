import { Header } from '../../components/Header/HeaderComponent'
import { MyMusicShop } from '../../components/MusicPlayer/MyMusicShop'
import { Footer } from '../../components/Footer/FooterComponent'

export const MusicView = () => {
  return (
    <div className='flex flex-col bg-[#FFFCF9] w-screen h-screen'>
      <Header />
      <div className='flex-1 overflow-y-auto'>
        <MyMusicShop />
      </div>
      <Footer />
    </div>
  )
}
