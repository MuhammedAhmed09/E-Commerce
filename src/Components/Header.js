import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const products = useSelector((state) => state.appReducer.products);
  return (
    <div className='bg-zinc-700 header'>
      <div className='px-52 py-2 flex justify-between'>
        
        <div>
          <Link to='/' className='text-2xl text-yellow-700 font-bold'>MYSHOP</Link>
        </div>
        <div className='flex items-center'>
          <Link to='/' className='text-white mx-8 font-semibold'>Home</Link>
          <Link to='/SingIn' className='text-white mx-8 font-semibold'>Sing In</Link>
          <Link to='/cart' className='text-white ml-8 font-semibold'>Cart <span className='rounded-full px-1 bg-red-600'>{products.length > 0 ? products.length : 0}</span></Link>
        </div>
      
      </div>
    </div>
  )
}

export default Header