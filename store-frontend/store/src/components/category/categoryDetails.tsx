import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Category } from '../../interfaces'
import { useMyContext } from '../../context/DataProvider'
import categoryData from '../../dummyData/categoryData'

const categoryDetails: React.FC = () => {
  //const { categories, products } = useMyContext()
  const { categoryID } = useParams()

  const [singleCategory, setSingleCategory] = useState()


  /* const fetchCategoryData = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/api/v1/category/${categoryID}`)
      const fetchedData = response.data
      setSingleCategory(fetchedData)
    } catch (err) {
      console.log("Error", err);
    }
  }
  
  useEffect(() => {
    fetchCategoryData()
  }, [])
  */

  const filteredSingleCat = categoryData.filter(category => category._id === categoryID)
  
  const singleCat = filteredSingleCat.map(cat => <div>{cat.name}</div>)
  
  const categoryInfo = filteredSingleCat.map(category => (
    <div className='flex flex-col gap-6   bbbbbbbbbbbbbbbb items-center justify-center h-full'>
      <img src={category.image} className='w-3/4 h-1/2 border rounded-lg'/>
      <img src={category.image} className='w-14 h-14 border rounded-full'/>
      <h1>{category.name}</h1>
    </div>
  ))

  return (
    <div>
      <div className='h-screen p-2 text-slate-300'>
        <div className='h-full bg-gray-900 rounded-lg flex flex-col'>
          <div className='flex items-center pl-10 h-1/4 bg-gray-800 shadow-2xl rounded-t-lg'>
            <div className='text-6xl '>{singleCat}</div>
          </div>
          <div className="h-full rounded-b-lg grid grid-cols-3">
          <div className='col-span-1 bg-slate-700 rounded-bl-lg'>
            {categoryInfo}
          </div>
          <div className='col-span-2 rounded-br-lg'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default categoryDetails