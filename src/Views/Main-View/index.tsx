import { Header } from '../../components/Header/HeaderComponent'
import { Footer } from '../../components/Footer/FooterComponent'
import { MainViewCard } from '../../components/Cards/MainViewCard'

export const MainView = () => {
  return (
    <>
      <Header />

      <div className='flex flex-col items-center justify-center bg-[#FFFCF9] w-screen h-screen'>
        <div className='flex flex-row'>
          <MainViewCard />
        </div>
        <h1 className='text-4xl font-bold mb-4 text-[#1F2421]'>Sean Camay</h1>
      </div>
      <Footer />
    </>
  )
}
