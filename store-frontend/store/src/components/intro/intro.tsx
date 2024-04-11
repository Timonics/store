import React from 'react'

import { Link as Scroll } from 'react-scroll'
import { Link } from 'react-router-dom'

import { GoArrowRight } from "react-icons/go"
import { IoCartOutline } from "react-icons/io5";
import { FaFacebook, FaFacebookMessenger, FaInstagram } from "react-icons/fa"
import { FaArrowDownLong, FaTwitter } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import features from './features';

const intro = () => {
  const featuredData = features.map(feature => (
    <Link
      to={`${feature.name}`}
      className='bg-gray-700 rounded-lg flex flex-col gap-2 items-center justify-center'
    >
      <h1>{feature.name}</h1>
      <p>{feature.description}</p>
    </Link>
  ))

  return (
    <div className="flex flex-col">
      <div className='h-screen'>
        <div className='h-1/6 flex justify-between m-4 items-center text-gray-900 text-center'>
          <h1 className='ml-6 p-4 italic rounded-lg shadow-lg'>logo</h1>
          <div className='flex gap-10 items-center text-xl'>
            <Link to="login" className='flex flex-col items-center'><MdOutlineAccountCircle color='rgb(79 70 229)' /> <p className='text-xs text-indigo-600 font-semibold'>Login</p></Link>
            <Link to="cart" className='mr-6 flex flex-col items-center'><IoCartOutline color='#111827 ' /> <p className='text-xs text-gray-900 font-bold'>Cart</p></Link>
          </div>
        </div>
        <div className='h-4/6 flex flex-col gap-10 justify-center items-center'>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='text-gray-900 font-bold text-6xl text-center'> Welcome to <span className='text-indigo-600'>Mickey'z store</span> <br />Where Style Meets Innovation!  </h1>
            <p className='text-center w-3/5  text-sm '>Redefine your style with our  curated collection of trendsetting apparel and accessories. We're not just a fashion store; we're your go-to destination for the latest trends delivered with a touch of digital elegance.</p>
          </div>
          <div className='w-full  flex justify-center gap-20 mr-14'>
            <Link to="home" className=' rounded-full p-3 px-10 bg-gray-900
          text-gray-300 font-semibold shadow-2xl transition hover:-translate-y-2 hover:scale-110 
          duration-300 hover:bg-indigo-600
          hover:text-gray-950'>Start Shopping!!!</Link>
            <Link to="register" className='flex gap-2 items-center rounded-full shadow-2xl p-3 px-10 font-bold text-gray-900 transition hover:-translate-y-2 hover:scale-110 
          duration-300 hover:bg-indigo-600 hover:text-gray-950
          '>Sign Up <GoArrowRight color='#111827' /></Link>
          </div>
          <Scroll
            to="features-section"
            smooth={true}
            duration={500}
            className='cursor-pointer border-2 border-gray-600 bg-gray-900 p-2 mt-2 rounded-full animate-bounce'>
            <FaArrowDownLong color='rgb(79 70 229)' />
          </Scroll>
        </div>
      </div>
      <section className='h-screen'>
        <div id='features-section' className='h-1/2 m-4 rounded-lg bg-gray-900 p-4 flex flex-col items-center justify-center gap-2'>
          <h1 className='text-3xl text-slate-300'>Our Features</h1>
          <div className='grid grid-cols-3 gap-10 p-2 h-full w-full'>{featuredData}</div>
        </div>
      </section>
      {/*  <div className='h-1/6  flex flex-col items-center justify-center '>
        <p className='text-xs'>© 2024 Mickey'z Hub Inc. All rights reserved.</p>
        <div className='flex gap-5 m-2'>
          <Link to="https://www.instagram.com"><FaInstagram /></Link>
          <Link to="https://www.facebook.com"><FaFacebook /></Link>
          <Link to="https://www.x.com"><FaTwitter /></Link>
          <Link to="https://www.messenger.com"><FaFacebookMessenger /></Link>
        </div> 
      </div> */}
    </div>
  )
}

export default intro