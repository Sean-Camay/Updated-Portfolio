import { NavigationComponent } from '../Navigation/NavigationComponent'

export const Header = () => {
  return (
    <div className='flex flex-row justify-end items-center p-4 bg-[#FFFCF9] border-b-2 border-black'>
      <NavigationComponent />
    </div>
  )
}
