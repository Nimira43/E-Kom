import { useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div 
      className={
        `flex items-center justify-center w-full transition-all duration-300 ${
          isOpen ? 
          'absolute top-0 left-0 w-full bg-light h-24 z-50' : 
          'w-auto'
        }`
      }
    >
      {isOpen ? (
        <form className='relative flex items-center justify-center w-full'>
          <div className='relative w-1/2'>
            <input 
              type='text' 
              placeholder='Search...' 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className='bg-light px-4 py-2 border-2 border-grey-light rounded-md focus:outline-none w-full'
            />
            <button 
              type='submit' 
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-grey-medium hover:text-blue-dark'
            >
              <RiSearchLine className='h-6 w-6'/>
            </button>
          </div>
          <button 
            type='button' 
            onClick={handleSearchToggle}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 text-grey-medium hover:text-blue-dark'
          >
            <RiCloseLine className='h-6 w-6' />
          </button>
        </form>
      ) : (
        <button 
          onClick={handleSearchToggle}
          aria-label='Toggle Search Bar'
        >
          <RiSearchLine className='h-6 w-6 text-grey-medium hover:text-blue-dark'/>
        </button>
      )}
    </div>
  )
}

export default SearchBar
