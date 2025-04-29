import { NavigationComponent } from '../Navigation/NavigationComponent';

export const Header = () => {
  return (
    <div className='flex flex-row justify-center items-center p-4 bg-white border-b-4 border-black'>
      <NavigationComponent />
    </div>
  );
};
