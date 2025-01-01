import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deCrement, inCrement, Removeitem } from '../Redux/appSlices';


const Cart = () => {
  const products = useSelector((state) => state.appReducer.products);
  const dispatch = useDispatch();




  return (
    <div className='grid grid-cols-4 gap-8 m-8 px-10 mt-28 overflow-hidden'>
      {products.map((item) => (
        <div key={item.id} className='rounded shadow-2xl p-5 h-auto'>
            <img className='h-44 w-full px-8 border-b' src={item.img} alt={item.title}/>
            <p className='font-bold w-full overflow-hidden mt-4 h-12'>{item.title.substring(0, 30)}</p>
            <p className='text-slate-700 my-2 text-sm font-semibold h-24'>{item.description.substring(0, 100)}</p>
            <p className='text-green-600 font-semibold'>${item.price}</p>
            <p className='text-slate-600 text-sm font-semibold justify-self-end my-2'>{item.category}</p>
            <div className='flex justify-between'>
              <button onClick={() => dispatch(inCrement(item.id))} className='rounded-full border-2 px-4 font-semibold text-white bg-gray-800'>+</button>
              <p className='rounded-full border-2 px-4 border-slate-950'>{item.quantity}</p>
              <button onClick={() => dispatch(deCrement(item.id))} className='rounded-full text-white px-4 bg-red-600 font-semibold'>-</button>
            </div>
            <p className='text-green-600 font-semibold mt-4' id='total'>Total Price: </p>
            <button onClick={() => dispatch(Removeitem(item.id))} className='rounded mt-4 p-1 w-full text-white bg-red-600 px-4'>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart