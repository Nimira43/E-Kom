import { useState } from "react"
import { RiSearchLine } from "react-icons/ri"

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
        <form className="relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm} 
              className="bg-light px-4 py-2 border-2 border-grey-light rounded-md focus:outline-none w-full"
            />
          </div>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <RiSearchLine className="h-6 w-6"/>
        </button>
      )}
    </div>
  )
}

export default SearchBar
