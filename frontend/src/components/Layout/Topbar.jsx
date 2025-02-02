import { RiFacebookLine, RiTwitterXLine, RiInstagramLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className='bg-[#777] text-[#f5fffa]'>
      <div className='container mx-auto'>
        <div>
          <a href="#" className='hover:text-[#c7ecfa]'>
            <RiFacebookLine className='h-5 w-5'/>            
          </a>
          <a href="#" className='hover:text-[#c7ecfa]'>
            <RiTwitterXLine className='h-5 w-5'/>            
          </a>
          <a href="#" className='hover:text-[#c7ecfa]'>
            <RiInstagramLine className='h-5 w-5'/>            
          </a>
        </div>
      </div>      
    </div>
  )
}

export default Topbar
