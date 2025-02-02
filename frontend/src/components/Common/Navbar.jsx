import { Link } from "react-router-dom"

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
      </nav>    
    </>
  )
}

export default Navbar
