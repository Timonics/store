import React from 'react'
import { Link } from 'react-router-dom';

import data from '../data/categories'

import { BiCategory } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go"

const sideBar = () => {
  function randomCategory(arr: any[]) {
    const shuffledArray = arr.sort(() => Math.random() - 0.5)
    return shuffledArray.slice(0, 4)
  }

  const randomCategoryElements = randomCategory(data)

  return (
    <div className='h-full bg-gray-900 rounded-lg p-4 flex flex-col'>
      <div className='flex gap-2 items-center text-indigo-500'>
        <BiCategory />Category
        <Link to='../category' className='ml-auto'><GoArrowRight /></Link>
      </div>
      <div className='flex items-start text-xs gap-2 p-3 font-medium'>
        {randomCategoryElements.map(item => (
          <Link to="../category" className='bg-gray-600 rounded-full px-2 py-1 transition duration-300 delay-100 hover:bg-gray-700 hover:text-slate-300'>{item.name}</Link>
        ))}
      </div>
      <div className='text-slate-300 font-bold m-2'>Discover our deals</div>
      <div className='flex flex-col items-start h-full w-full rounded-lg bg-gray-700 shadow-2xl'>
      </div>
    </div>
  )
}

export default sideBar