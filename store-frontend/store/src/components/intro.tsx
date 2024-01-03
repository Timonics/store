import React from 'react'
import { Link } from 'react-router-dom'

import { GoArrowRight } from "react-icons/go"

const intro = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className='h-1/6 flex justify-center items-center italic text-gray-500'>
        <h1 className='p-4 rounded-lg shadow-lg'>logo</h1>
      </div>
      <div className='h-4/6 flex flex-col gap-10 justify-center items-center'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-gray-900 font-bold text-6xl text-center'> Welcome to <span className='text-purple-700'>Mickey'z store</span> <br />Where Style Meets Innovation!  </h1>
          <p className='text-center w-3/5  text-sm '>Redefine your style with our  curated collection of trendsetting apparel and accessories. We're not just a fashion store; we're your go-to destination for the latest trends delivered with a touch of digital elegance.</p>
        </div>
        <div className='w-full  flex justify-center gap-20 mr-14'>
          <Link to="home" className=' rounded-full p-3 px-10 bg-gray-900
          text-gray-100 font-semibold shadow-md transition hover:-translate-y-2 hover:scale-110 
          duration-300 hover:bg-purple-600
          hover:text-slate-100'>Start Shopping!!!</Link>
          <Link to="register" className='flex gap-2 items-center rounded-full shadow-lg p-3 px-10 font-bold text-purple-700 transition hover:-translate-y-2 hover:scale-110 
          duration-300
          '>Sign Up <GoArrowRight color='#9333ea' /></Link>
        </div>
      </div>
      <div className='h-1/6  border-2 border-red-400'></div>
    </div>
  )
}

export default intro