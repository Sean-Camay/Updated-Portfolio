import { Header } from '../../components/Header/HeaderComponent'
import { MyMusicShop } from '../../components/MusicPlayer/MyMusicShop'

export const MusicView = () => {
  return (
    <div className='bg-[#FFFCF9] w-screen h-screen overflow-y-auto'>
      <Header />
      <h1>Music View</h1>
      <MyMusicShop />
    </div>
  )
}
