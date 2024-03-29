import axios from 'axios'
import React, { useEffect, useState } from 'react'

const register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    street: '',
    apartment: '',
    city: '',
    zip: '',
    country: '',
    phone: 0
  })

  return (
    <div className='h-screen px-16 py-7 text-slate-300'>
      <div className='h-full bg-gray-900 rounded-lg p-4 flex flex-col items-center'>
        <h1 className='text-xl'>Create your account</h1>
        <p className='text-xs text-slate-500'>Welcome to Mickey'z Hub! Please fill out this form to get started.</p>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Name</label>
            <input placeholder='Name' type='text'/>
            <input placeholder='Email' />
            <input placeholder='Password' />
            <input placeholder='Confirm Password' />
            <input placeholder='Street' />
            <input placeholder='Apartment' />
          </div>
          <div className='flex flex-col gap-2'>
            <input placeholder='City' />
            <input placeholder='Zip' />
            <input placeholder='Country' />
            <input placeholder='Phone' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default register