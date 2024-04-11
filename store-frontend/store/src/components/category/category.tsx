import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import categoryData from '../../dummyData/categoryData';

import { CategoryProps } from '../../interfaces';

import { useMyContext } from '../../context/DataProvider';

import { BiSolidCategory } from 'react-icons/bi';
import axios from 'axios';
import { Spin } from 'antd';

const category: React.FC = () => {
  //const { categories } = useMyContext()
  const { isLoading } = useMyContext()

  const categoryList = categoryData.map(category => (
    <Link
      to={`../category/${category._id}`}
      key={category._id}
      className='rounded-lg flex items-center justify-center p-2 bg-gray-900 transition hover:scale-110 
      duration-300 hover:bg-indigo-600 hover:text-gray-950 hover:font-bold'
    >
      {category.name}
    </Link>
  ))

  const categoryElements = categoryData.map((data) => (
    <Link
      to={`../category/${data._id}`}
      key={data._id}
      className='rounded-lg w-2/3 h-2/3 flex place-content-center items-center bg-slate-600 shadow-2xl transition hover:translate-y-0.5 hover:scale-110 
      duration-300'
    >{data.name}</Link>
  ))

  return (
    <div className='h-screen p-2 text-slate-300'>
      <div className='h-full bg-gray-900 rounded-lg flex flex-col'>
        <div className='flex items-center pl-10 h-1/4 bg-gray-800 shadow-2xl rounded-t-lg'>
          <BiSolidCategory className='text-6xl' />
          <h1 className='text-6xl'>Categories</h1>
        </div>
        <div className='h-full rounded-b-lg overflow-y-auto grid grid-cols-4'>
          <div className='col-span-1 bg-slate-700 overflow-y-auto flex flex-col gap-3 p-2 no-scrollbar ' >
            {categoryList}
          </div>
          {!isLoading ? <div className='col-span-3 grid grid-cols-4 place-items-center'>{categoryElements}</div> : <Spin size='large' className='flex place-content-center items-center h-full' />}
        </div>
      </div>
    </div>
  )
}

export default category