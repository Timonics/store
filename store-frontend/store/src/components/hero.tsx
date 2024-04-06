import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';

import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from "react-icons/md";

import { Spin } from 'antd';

const hero: React.FC = () => {
  interface Product {
    _id: string,
    name: string,
    description: string,
    richDescription: string,
    image: string,
    images: [string]
    brand: string,
    price: number,
    category: {
      _id: string,
      name: string,
      color: string,
      icon: string,
      image: string
    },
    countInStock: number,
    rating: number,
    isFeatured: boolean,
    dateCreated: string
  }
  
  const [productsData, setProductData] = useState<Product[]>([])
  
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  const fetchProductsApi = async () => {
    try {
      const response = await axios.get('http://localhost:3500/api/v1/products')
      const fetchedProduct = response.data
      setProductData(fetchedProduct)
      setIsLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProductsApi()
  }, [])


  const productsElements = productsData.map(item => {
    return (
      <Link
        to={`/${item.category.name.toLowerCase()}/${item.name.toLowerCase().replace(/\s/g, "-")}`}
        key={item._id}
        className=''
      >
        <div className='rounded-lg w-32 h-32 gap-1 flex flex-col place-content-center items-center bg-slate-700 shadow-2xl transition hover:translate-y-0.5 hover:scale-110 
          duration-300'>
          <img src={item.image} alt='' className='border w-2/3 h-1/2 rounded-lg' />
          <h1 style={{ fontSize: "15px" }}>{item.name}</h1>
          <p style={{ fontSize: "12px" }}>{`₦${item.price}`}</p>
        </div>
      </Link>
    )
  })

  return (
    <div className='h-full flex flex-col rounded-lg bg-gray-900 text-slate-300'>
      <div className='h-1/3 p-4 rounded-t-lg bg-gray-800 shadow-2xl'>
        <div className='flex justify-between items-center'>
          <div className='rounded-full p-2 bg-slate-950 cursor-pointer transition-all duration-300'><FaSearch color='rgb(148 163 184)' /></div>
          <div className='flex gap-3 items-center'>
            <Link to="" className='py-2 px-3 rounded-full text-xs items-center bg-slate-700 font-semibold'>Explore Premium Deals</Link>
            <Link to='../login'><MdOutlineAccountCircle className='text-2xl' color='rgb(79 70 229)' /></Link>
            <Link to='../cart'><IoCartOutline color='rgb(203 213 225)' className='text-lg' /></Link>
          </div>
        </div>
        <div className='m-4 p-1'>
        </div>
      </div>
      <div className='h-full no-scrollbar overflow-y-auto'>
      {!isLoading ? <div className='p-2 m-2 flex gap-6'>{productsElements}</div> : <Spin size='large' className='h-full flex place-content-center items-center' />}
      </div>
    </div>
  )
}

export default hero