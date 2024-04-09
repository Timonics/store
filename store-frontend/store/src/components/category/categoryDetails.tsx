import React from 'react'
import { useParams } from 'react-router-dom'

const categoryDetails: React.FC = () => {
  const { categoryID } = useParams()

  return (
    <div>
      <div className='h-screen p-2 text-slate-300'>
        <div className='h-full bg-gray-900 rounded-lg flex flex-col'>
          <div className='flex items-center pl-10 h-1/4 bg-gray-800 shadow-2xl rounded-t-lg'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default categoryDetails