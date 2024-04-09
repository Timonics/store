import React, { useState } from 'react'

import emptyCartIcon from "../../assets/images/emptyCart.png"

import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const cart = () => {
  //const { data, setData } = useState<any[]>([])

  return (
    <div>
      <div className='h-screen px-16 py-7 text-slate-300'>
        <div className='h-full bg-gray-900 rounded-lg p-4 flex flex-col items-center'>
          <Link to="/home" className='p-1 rounded-full bg-indigo-600 ml-auto'>
            <IoHomeSharp color='rgb(203 213 225)' className='' size={"24px"} />
          </Link>
          <div className='flex flex-col items-center mt-6 gap-6'>
            <img src={emptyCartIcon} alt='cart-logo' className='w-40 h-40' />
            {/* <div className='w-40 h-40 bg-indigo-400 rounded-full flex items-center place-content-center'>
            </div> */}
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