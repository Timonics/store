import React, { useState } from 'react'

import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const cart = () => {
  //const { data, setData } = useState<any[]>([])

  return (
    <div>
      <div className='h-screen px-16 py-7 text-slate-300'>
        <div className='h-full bg-gray-900 rounded-lg p-4 flex flex-col items-center'>
          <div className='flex flex-col items-center mt-6 gap-6'>
            <div className='w-40 h-40 bg-indigo-500 rounded-full'>
            </div>
            <h1 className='text-5xl'>Your Cart is Empty</h1>
            <p>Browse our
              categories and discover our best deals. Happy shopping! 🎉</p>
            <Link to="../category" className='rounded-md p-2 m-2 shadow-xl bg-indigo-600'>Go to Categories</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart