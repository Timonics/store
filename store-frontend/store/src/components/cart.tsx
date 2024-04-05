import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const cart = () => {
  const {data, setData} = useContext(DataContext)

  return (
    <div>cart</div>
  )
}

export default cart