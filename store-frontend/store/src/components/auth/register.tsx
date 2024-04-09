import axios from 'axios'
import React, { useEffect, useState } from 'react'
import login from './login'

const register = () => {
  interface UserData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    street: string,
    apartment: string,
    city: string,
    zip: string,
    country: string,
    phone: number
  }

  const [registerData, setRegisterData] = useState<UserData>({
    name: "",
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

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setRegisterData({
      ...registerData,
      [name]: value
    })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const postRegisterData = await axios.post("", registerData)
      console.log("Successfully created account", postRegisterData.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='h-screen px-16 py-7 text-slate-300'>
      <div className='h-full bg-gray-900 rounded-lg p-4 flex flex-col gap-4 items-center'>
        <h1 className='text-xl'>Create your account</h1>
        <p className='text-xs text-slate-500'>Welcome to Mickey'z Hub! Please fill out this form to get started.</p>
        <div className='flex gap-2'>
          <form onSubmit={handleSubmit} className='grid grid-cols-3 gap-4'>
            <input
              placeholder='Name'
              type='text'
              name="name"
              value={registerData.name}
              onChange={handleChange}
              className=' col-span-full' />
            <input
              placeholder='Email'
              name="email"
              value={registerData.email}
              onChange={handleChange}
              className='col-span-full' />
            <br />
            <input
              placeholder='Password'
              name="password"
              value={registerData.password}
              onChange={handleChange}
              className='' />
            <input
              placeholder='Confirm Password'
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange} />
            <input
              placeholder='Street'
              name="street"
              value={registerData.street}
              onChange={handleChange} />
            <input
              placeholder='Apartment'
              name="apartment"
              value={registerData.apartment}
              onChange={handleChange} />
            <input
              placeholder='City'
              name="city"
              value={registerData.city}
              onChange={handleChange} />
            <input
              placeholder='Zip'
              name="zip"
              value={registerData.zip}
              onChange={handleChange} />
            <input
              placeholder='Country'
              name="country"
              value={registerData.country}
              onChange={handleChange} />
            <input
              placeholder='Phone'
              name="phone"
              value={registerData.phone}
              onChange={handleChange} />
              <button type='submit' className='col-span-full p-2 bg-indigo-600 rounded-lg'>Create Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default register