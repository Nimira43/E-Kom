import { Link } from "react-router-dom"
import { RiUser6Line, RiShoppingBag4Line, RiMenuLine  } from "react-icons/ri"

const Navbar = () => {
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        <div>
          <Link to='/' className='logo text-2xl font-medium'>
            E-Kom
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to='#' className='hover:text-blue-dark text-sm font-medium uppercase'>Men</Link>
          <Link to='#' className='hover:text-blue-dark text-sm font-medium uppercase'>Women</Link>
          <Link to='#' className='hover:text-blue-dark text-sm font-medium uppercase'>Topwear</Link>
          <Link to='#' className='hover:text-blue-dark text-sm font-medium uppercase'>Bottomwear</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to='/profile' className="hover:text-blue-dark">
            <RiUser6Line />
          </Link>
          <Link to='/profile' className="hover:text-blue-dark">
            <RiShoppingBag4Line />
          </Link>
          <Link to='/profile' className="hover:text-blue-dark">
            <RiMenuLine />
          </Link>
        </div>
      </nav>    
    </>
  )
}

export default Navbar
