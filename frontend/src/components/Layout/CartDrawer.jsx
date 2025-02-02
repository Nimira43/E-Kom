import { RiCloseLine } from 'react-icons/ri'

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
  

  return (
    <div 
      className={
        `fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-grey-extra-light shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          drawerOpen ?
          'translate-x-0' :
          'translate-x-full'
        }`
      }
    >
      <div className='flex justify-end p-4'>
        <button onClick={toggleCartDrawer}>
          <RiCloseLine className='h-6 w-6 text-grey-medium' />
        </button>
      </div>
      <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl font-semibold mb-4'>Cart</h2>
      </div>
    </div>
  )
}

export default CartDrawer
