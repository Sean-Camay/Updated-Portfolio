import { NavigationComponent } from '../Navigation/NavigationComponent';

export const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-white border-b-4 border-black'>
      <NavigationComponent />
    </div>
  );
};
