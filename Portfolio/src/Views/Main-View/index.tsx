import { Header } from '../../components/Header/HeaderComponent'
import { Footer } from '../../components/Footer/FooterComponent'

export const MainView = () => {
  return (
    <>
      <Header />

      <div className='flex flex-col items-center justify-center bg-white w-screen h-screen'>
        <div className='flex-row mb-4'></div>
        <h1 className='text-4xl font-bold mb-4'>Welcome to the Main View</h1>
        <p className='text-lg text-gray-700'>
          This is the main view of your application.
        </p>
      </div>
      <Footer />
    </>
  )
}
// This is a simple React component that serves as the main view of your application.
