import React from 'react'
import { Link } from 'react-router-dom';

import data from '../data/categories'

import { BiSolidCategory } from 'react-icons/bi';

const category = () => {
  const categoryElements = data.map(item => (
    <Link to={`../category/${item.name.toLowerCase()}`} className='border '>{item.name}</Link>
  ))

  return (
    <div className='h-screen p-2 text-slate-300'>
      <div className='h-full bg-gray-900 rounded-lg flex flex-col'>
        <div className='flex items-center pl-10 h-1/4 bg-gray-800 shadow-2xl rounded-t-lg'>
        <BiSolidCategory className='text-6xl'/>
        <h1 className='text-6xl'>Categories</h1>
        </div>
        <div className=' h-full rounded-b-lg overflow-y-auto p-4'>
          {categoryElements}
        </div>
      </div>
    </div>
  )
}

export default category