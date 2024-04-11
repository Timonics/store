import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import { FcGoogle } from "react-icons/fc";
import { UserData } from '../../interfaces'

import Cookies from 'js-cookie'
import { useMyContext } from '../../context/DataProvider';

const login = () => {
  const navigate = useNavigate()
  const { googleSignIn } = useMyContext()
  const [loginData, setLoginData] = useState<UserData>({
    email: "",
    password: ""
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:3500/api/v1/users/login", loginData)
      const fetchedUserData = response.data
      const token = fetchedUserData.token
      Cookies.set("authToken", token, { secure: true, sameSite: "Strict" })
      navigate("/home")
      console.log("User successfully logged in", fetchedUserData);
    } catch (err) {
      console.log("Login error", err);
    }
  }

  return (
    <div className='h-screen flex flex-col py-16 px-24'>
      <div className='flex h-full shadow-2xl'>
        <div className='bg-gray-900 w-2/5 rounded-l-xl flex flex-col p-4 items-center'>
          <h1 className='text-4xl text-indigo-600 font-black mt-4'>Welcome Back!!</h1>
          <div className='flex flex-col gap-2 mt-auto mb-4 items-start'>
            <p className='text-xs text-slate-500'>Don't have an account?, Join our community! Sign up now to explore exciting features, recieve updates, and be part of something amazing.</p>
            <Link to='../register' className='p-1 border-4 border-indigo-600 text-indigo-600 text-bold transition hover:scale-110 hover:translate-x-1 duration-500'>Register</Link>
          </div>
        </div>
        <div className='flex flex-col items-center gap-5 w-3/5 bg-slate-200 rounded-r-xl'>
          <h1 className='mt-3 p-4 text-3xl text-gray-900 font-black'>Sign in</h1>
          <form onSubmit={handleSubmit} className='flex flex-col w-full items-center gap-5'>
            <input
              className='w-2/3 p-1 bg-slate-50 border-b-2 border-indigo-600 outline-none'
              placeholder='Email'
              onChange={handleChange}
              name="email"
              value={loginData.email}
            />
            <input
              className='w-2/3 p-1 bg-slate-100 border-b-2 border-indigo-600 outline-none'
              placeholder='Password'
              onChange={handleChange}
              name="password"
              value={loginData.password}
            />
            <button
              type='submit'
              className={`bg-indigo-600 rounded-lg w-1/3 p-1 text-slate-200 text-bold hover:text-slate-50 hover:bg-indigo-800`}
            >Log in</button>
          </form>
          <button
            className='flex bg-gray-900 gap-2 rounded-md p-2 shadow-2xl'
            onClick={googleSignIn}
          >
            <FcGoogle />
            <p className='text-xs text-slate-300 font-medium'>Or Sign in with Google</p>
          </button>
          <p className='text-xs'>Forgot your password? No worries! <Link to='' className='underline text-indigo-600 hover:text-indigo-900'>Click here to reset it</Link></p>
        </div>
      </div>
    </div>
  )
}

export default login