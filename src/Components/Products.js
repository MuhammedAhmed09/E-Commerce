import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { addToCart } from '../Redux/appSlices';
import { useDispatch } from 'react-redux';



const Products = () => {
  
  const dispach = useDispatch();

  const data = useLoaderData();
  const products = data.data;
  console.log(products);
  
  
  return (
    <div>
      <div className='grid grid-cols-5 gap-6 p-8 overflow-hidden py-16'>
        {products.map((item) => (
          <div key={item.id} className='rounded p-5 shadow-2xl h-auto flex-wrap hover:{"top-10"}'>
              <img className='h-48 w-full px-8 border-b' src={item.image} alt={item.title}/>
              <p className='font-bold w-full overflow-hidden mt-4 h-12'>{item.title.substring(0, 30)}</p>
              <p className='text-slate-700 my-2 text-sm font-semibold h-24'>{item.description.substring(0, 100)}</p>
              <b className='text-green-600'>${item.price}</b>
              <p className='text-slate-600 text-sm font-semibold justify-self-end my-2'>{item.category}</p>
              <p className=' mb-4 my-2 text-sm'>({item.rating.count}reviews)</p>
              <button 
                onClick={() => dispach(addToCart({
                  id: item.id,
                  title: item.title,
                  img: item.image,
                  price: item.price, 
                  description: item.description,
                  category: item.category,
                  quantity: 1
                }))}
                className='text-white bg-blue-800 rounded w-full'
                >
                  ADD TO CART
              </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products