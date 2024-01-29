import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const login = () => {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  return (
    <div className='h-screen flex flex-col py-16 px-24'>
      <div className='flex h-full shadow-2xl'>
        <div className='bg-gray-900 w-2/5 rounded-l-xl flex flex-col p-4 items-center'>
          <h1 className='text-4xl text-indigo-600 font-black mt-4'>Welcome Back!!</h1>
          <div className='flex flex-col gap-2 mt-auto mb-4 items-start'>
          <p className='text-xs text-slate-500'>Join our community! Sign up now to explore exciting features, recieve updates, and be part of something amazing.</p>
          <Link to='../register' className='p-1 border-4 border-indigo-600 text-indigo-600 text-bold transition hover:scale-110 hover:translate-x-1 duration-500'>Register</Link>
          </div>
        </div>
        <div className='flex flex-col items-center gap-5 w-3/5 bg-slate-200 rounded-r-xl'>
          <h1 className='mt-3 p-4 text-3xl text-gray-900 font-black'>Sign in</h1>
          <input className='w-2/3 p-1 bg-slate-50 border-b-2 border-indigo-600 outline-none' placeholder='Email'/>
          <input className='w-2/3 p-1 bg-slate-100 border-b-2 border-indigo-600 outline-none' placeholder='Password'/>
          <button className={`bg-indigo-600 rounded-lg w-1/3 p-1 text-slate-200 text-bold hover:text-slate-50 hover:bg-indigo-800 ${click ? "transition scale-90 translate-x-1 duration-300" : ""}`}
          onClick={handleClick}>Log in</button>
        <div>
          <p className='text-xs'>Forgot your password? No worries! <Link to='' className='underline text-indigo-600 hover:text-indigo-900'>Click here to reset it</Link></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default login