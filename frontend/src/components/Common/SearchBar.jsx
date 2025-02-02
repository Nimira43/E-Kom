import { useState } from "react"
import { RiSearchLine } from "react-icons/ri"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {isOpen ? (
        <form></form>
      ) : (
        <button>
          <RiSearchLine />
        </button>
      )}
    </div>
  )
}

export default SearchBar
