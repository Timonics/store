import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { BiSolidCategory } from 'react-icons/bi';
import axios from 'axios';
import { Spin } from 'antd';

const category = () => {
  interface Category {
    _id: string,
    name: string,
    color: string,
    icon: string,
    image: string
  }

  const [categoryData, setCatgoryData] = useState<Category[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchCategoryApi = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/v1/category")
      const categoryItems = await response.data
      setCatgoryData(categoryItems)
      setIsLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCategoryApi()
  }, [])

  const categoryElements = categoryData.map((data) => (
    <Link to={`../category/${data.name.toLowerCase()}`} key={data._id} className='rounded-lg w-full h-10 flex place-content-center items-start bg-slate-700 shadow-2xl transition hover:translate-y-0.5 hover:scale-110 
    duration-300'>{data.name}</Link>
  ))

  return (
    <div className='h-screen p-2 text-slate-300'>
      <div className='h-full bg-gray-900 rounded-lg flex flex-col'>
        <div className='flex items-center pl-10 h-1/4 bg-gray-800 shadow-2xl rounded-t-lg'>
          <BiSolidCategory className='text-6xl' />
          <h1 className='text-6xl'>Categories</h1>
        </div>
        <div className='h-full rounded-b-lg overflow-y-auto p-4 flex flex-col gap-4'>
          {!isLoading ? categoryElements : <Spin size='large' className='flex place-content-center items-center h-full'/>}
        </div>
      </div>
    </div>
  )
}

export default category