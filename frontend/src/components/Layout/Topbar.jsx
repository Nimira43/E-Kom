import { RiFacebookLine, RiTwitterXLine, RiInstagramLine } from 'react-icons/ri';

const Topbar = () => {
  return (
    <div 
      className='bg-grey-medium text-light'
    >
      <div 
        className='container mx-auto flex justify-between items-center py-3 px-4'
      >
        <div 
          className='hidden md:flex items-center space-x-4'
        >
          <a 
            href='#'
            className='hover:text-blue-light'
          >
            <RiFacebookLine className='h-5 w-5'/>            
          </a>
          <a 
            href='#' 
            className='hover:text-blue-light'
          >
            <RiTwitterXLine className='h-5 w-5'/>            
          </a>
          <a 
            href='#' 
            className='hover:text-blue-light'
          >
            <RiInstagramLine className='h-5 w-5'/>            
          </a>
        </div>
        <div 
          className='text-sm text-center flex-grow'
        >
          <span>
            Our expert team are here to answer your queries.
          </span>
        </div>
        <div 
          className='text-sm hidden md:block'
        >
          <a 
          href='#' 
          className='hover:text-blue-light'
          >
            +44 (0)121 328 4832
          </a>
        </div>
      </div>      
    </div>
  )
}

export default Topbar
