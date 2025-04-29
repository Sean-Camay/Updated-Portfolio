import { Footer } from '../../components/Footer/FooterComponent';
import { Header } from '../../components/Header/HeaderComponent';
import { MiniPop } from '../../components/Cards/MiniPop';
import { GehaCard } from '../../components/Cards/GehaCard';

export const WorkView = () => {
  return (
    <div className='bg-gray-100 w-screen h-screen'>
      <Header />

      <div className='flex flex-col items-center justify-center bg-white'>
        <div className='flex-row mb-4'>
          <h1 className='text-4xl font-bold mb-4 text-black'>Work</h1>
        </div>
        <div className='flex-row mb-4'>
          <MiniPop />
        </div>
        <div className='flex-row mb-4'>
          <GehaCard />
        </div>
      </div>

      <Footer />
    </div>
  );
};
