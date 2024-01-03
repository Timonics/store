import React from 'react'
import { Outlet } from 'react-router-dom'

import Nav from './nav'
import Footer from './footer'

const layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default layout