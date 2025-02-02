import { Link } from 'react-router-dom'
import { RiUser6Line, RiShoppingBag4Line, RiMenuLine  } from 'react-icons/ri'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { useState } from 'react'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <>
      <nav 
        className='container mx-auto flex items-center justify-between py-4 px-6'
      >
        <div>
          <Link to='/' className='logo text-2xl font-medium'>
            E-Kom
          </Link>
        </div>
        <div className='hidden md:flex space-x-6'>
          <Link to='#' className='hover:text-blue-dark text-sm font-medium uppercase'>Men</Link>
          <Link to='#' className='hover:text-blue-dark text-sm font-medium uppercase'>Women</Link>
          <Link to='#' className='hover:text-blue-dark text-sm font-medium uppercase'>Topwear</Link>
          <Link to='#' className='hover:text-blue-dark text-sm font-medium uppercase'>Bottomwear</Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/profile' className='hover:text-blue-dark'>
            <RiUser6Line className='h-6 w-6' />
          </Link>
          <button 
            onClick={toggleCartDrawer}
            className='relative hover:text-blue-dark'
          >
            <RiShoppingBag4Line className='h-6 w-6' />
            <span className='absolute -top-2 bg-grey-medium hover:bg-blue-dark text-light text-xs rounded-full px-1.5 py-0.5'>
              1
            </span>
          </button>
          <div className='overflow-hidden'>
            <SearchBar />
          </div>
          <button className='md:hidden hover:text-blue-dark'>
            <RiMenuLine className='h-6 w-6'/>
          </button>
        </div>
      </nav>   
      <CartDrawer 
        drawerOpen={drawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      /> 
    </>
  )
}

export default Navbar
