import React from 'react'
import { NavLink } from 'react-router-dom'

import { IoHomeOutline } from 'react-icons/io5'
import { FaSearch } from 'react-icons/fa'

const nav = () => {
  return (
    <div className='flex flex-col gap-3 p-4 rounded-lg bg-gray-900 text-slate-300 font-bold text-xs'>
      <NavLink to="." className='flex gap-2 items-center hover:text-slate-50'><IoHomeOutline />Home</NavLink>
      <NavLink to="" className='flex gap-2 items-center  hover:text-slate-50'><FaSearch />Search</NavLink>
    </div>
  )
}

export default nav