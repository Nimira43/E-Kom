import { RiCloseLine } from 'react-icons/ri'

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
  

  return (
    <div 
      className={
        `fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-light shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          drawerOpen ?
          'translate-x-0' :
          'translate-x-full'
        }`
      }
    >
      <div className='flex justify-end p-4'>
        <button 
          onClick={toggleCartDrawer}
          className='text-grey-medium hover:text-blue-dark'
        >
          <RiCloseLine className='h-6 w-6' />
        </button>
      </div>
      <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl font-normal mb-4 uppercase'>Cart</h2>
      </div>
      <div className='p-4 bg-grey-medium sticky bottom-0'>
        <button className=' w-full bg-light hover:bg-blue-light font-normal py-3 rounded-md uppercase'>Checkout</button>
        <p className='text-white'>Shipping, taxes and discount codes calculated at checkout</p>
      </div>
    </div>
  )
}

export default CartDrawer
