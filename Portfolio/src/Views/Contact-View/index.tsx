import { Footer } from '../../components/Footer/FooterComponent';
import { Header } from '../../components/Header/HeaderComponent';

export const ContactView = () => {
  return (
    <>
      <Header />

      <div className='flex flex-col items-center justify-center bg-gray-100 w-screen h-screen'>
        <div className='flex-row mb-4'></div>
        <h1 className='text-4xl font-bold mb-4'>Welcome to the Contact View</h1>
        <p className='text-lg text-gray-700'>
          This is the contact view of your application.
        </p>
      </div>

      <Footer />
    </>
  );
};
