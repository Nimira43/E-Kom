import { useState } from "react"
import { RiSearchLine } from "react-icons/ri"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {isOpen ? (
        <form></form>
      ) : (
        <button onClick={handleSearchToggle}>
          <RiSearchLine className="h-6 w-6"/>
        </button>
      )}
    </div>
  )
}

export default SearchBar
