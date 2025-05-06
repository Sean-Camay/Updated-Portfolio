import { Link } from 'react-router-dom'
import { BasicButton } from '../Buttons/BasicButton'

export const NavigationComponent = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <Link to='/' className='mr-4'>
        <BasicButton title='Home' />
      </Link>
      <Link to='/about' className='mr-4'>
        <BasicButton title='About' />
      </Link>
      <Link to='/work' className='mr-4'>
        <BasicButton title='Work' />
      </Link>
      <Link to='/contact' className='mr-4'>
        <BasicButton title='Contact' />
      </Link>
    </div>
  )
}
