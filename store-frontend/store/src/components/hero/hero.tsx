import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import categories from "../../dummyData/categoryData"

import { CategoryProps } from '../../interfaces';

import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from "react-icons/md";

import { useMyContext } from '../../context/DataProvider';
import { Spin } from 'antd';

const hero: React.FC<CategoryProps> = (props) => {
  //const { categories, isLoading, profile } = useMyContext()
  const { isLoading } = useMyContext()
  const categoriesElements = categories.map(category => {
    return (
      <Link
        to={`/category/${category._id}`}
        key={category._id}
        state={props}
        className='relative flex justify-center items-center'
      >
        {<div className={`rounded-lg w-32 h-32 gap-3 flex flex-col place-content-center items-center bg-slate-800 shadow-2xl transition hover:translate-y-0.5 hover:scale-110 duration-300 ${!category.isAvailable ? " opacity-75 blur-sm " : ""}`}>
          <img src={category.image} alt='' className='border w-2/3 h-1/2 rounded-lg' />
          <h1 style={{ fontSize: "15px" }}>{category.name}</h1>
          {/* <p style={{ fontSize: "12px" }}>{`₦${product.price}`}</p> */}
        </div>}
        {!category.isAvailable ? <h1 className='absolute text-xs p-2'>Coming soon!!! ⏳</h1> : ""}
      </Link>
    )
  })

  return (
    <div className='h-full flex flex-col rounded-lg bg-gray-900 text-slate-300'>
      <div className='h-1/4 p-4 rounded-t-lg bg-gray-800 shadow-2xl'>
        <div className='flex justify-between items-center'>
          <div className='rounded-full p-2 bg-slate-950 cursor-pointer transition-all duration-300'>

            <FaSearch color='rgb(148 163 184)' />
          </div>
          <div className='flex gap-3 items-center'>
            <Link to="/premium-deals" className='py-2 px-3 rounded-full text-xs items-center bg-slate-700 font-semibold'>Explore Premium Deals</Link>
            <Link to='../login'><MdOutlineAccountCircle className='text-2xl' color='rgb(79 70 229)' /></Link>
            {/* {!profile ? <Link to='../login'><MdOutlineAccountCircle className='text-2xl' color='rgb(79 70 229)' /></Link> : <div>
              <img src={profile.picture} alt='google profile pic' className="rounded-full w-8"/>
              </div>} */}
            <Link to='../cart'><IoCartOutline color='rgb(203 213 225)' className='text-lg' /></Link>
          </div>
        </div>
        <div className='m-4 p-1'>
        </div>
      </div>
      <div className={`${isLoading && "h-full"} no-scrollbar overflow-y-auto flex place-content-center`}>
        {!isLoading ? <div className='p-5 my-3 bg-gray-600 rounded-xl grid grid-cols-4 gap-x-10 gap-y-5 items-center'>{categoriesElements}</div> : <Spin size='large' className='h-full flex items-center justify-center' />}
        {/* {!isLoading ? <div className='p-2 m-2 grid grid-cols-4 gap-x-8'>{categoriesElements}</div> : <Spin size='large' className='h-full flex items-center' />} */}
      </div>
    </div>
  )
}

export default hero