import { Footer } from '../../components/Footer/FooterComponent'
import { Header } from '../../components/Header/HeaderComponent'
import { MiniPop } from '../../components/Cards/MiniPop'
import { GehaCard } from '../../components/Cards/GehaCard'
import { Ankura } from '../../components/Cards/Ankura'
import { Ailevate } from '../../components/Cards/Ailevate'

export const WorkView = () => {
  return (
    <div className='bg-[#FFFCF9] w-screen h-screen'>
      <Header />

      <div className='flex flex-col items-center justify-center bg-[#FFFCF9]'>
        <div className='flex flex-row mb-4'>
          <h1 className='text-4xl font-bold mb-4 text-black'>Work</h1>
        </div>

        <div className='flex flex-row mb-4 items-center'>
          <div className='p-4'>
            <Ailevate />
          </div>
          <div>
            <Ankura />
          </div>
        </div>

        <div className='flex flex-row mb-4'>
          <div className='p-4'>
            <MiniPop />
          </div>
          <div className='p-4'>
            <GehaCard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
