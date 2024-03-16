import React from 'react'

import { FaSearch } from 'react-icons/fa';
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const hero = () => {

  return (
    <div className='h-full rounded-lg bg-gray-900 text-slate-300'>
      <div className='h-1/3 p-4 rounded-t-lg bg-gray-800 shadow-2xl'>
        <div className='flex justify-between items-center'>
          <div className='rounded-full p-2 bg-slate-950 cursor-pointer transition-all duration-300'><FaSearch color='rgb(148 163 184)' /></div>
          <div className='flex gap-3 items-center'>
            <Link to="" className='py-2 px-3 rounded-full text-xs items-center bg-slate-700 font-semibold transition '>Explore Premium Deals</Link>
            <Link to='../login'><MdOutlineAccountCircle className='text-2xl' color='rgb(79 70 229)' /></Link>
          </div>
        </div>
        <div className='m-4 p-1'>
          
        </div>
      </div>
      <div className=''></div>
    </div>
  )
}

export default hero