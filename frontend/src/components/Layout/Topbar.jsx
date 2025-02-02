import { RiFacebookLine, RiTwitterXLine, RiInstagramLine } from 'react-icons/ri';

const Topbar = () => {
  return (
    <div className='bg-grey-medium text-light'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-4 p-2'>
          <a href='#' className='hover:text-blue-light'>
            <RiFacebookLine className='h-5 w-5'/>            
          </a>
          <a href='#' className='hover:text-blue-light text-royal'>
            <RiTwitterXLine className='h-5 w-5'/>            
          </a>
          <a href='#' className='hover:text-blue-light'>
            <RiInstagramLine className='h-5 w-5'/>            
          </a>
        </div>
        <div className='text-sm text-center'>
          <span>Our expert team are here to answer your queries.</span>
        </div>
        <div className='text-sm'>
          <a href='#' className='hover:text-blue-light'>+44 (0)121 328 4832</a>
        </div>
      </div>      
    </div>
  )
}

export default Topbar
