import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataContext from './DataContext'

interface Props {
  children: React.ReactNode
}

const DataProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState(undefined)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/v1/category")
      const fetchedData = await response.data
      setData(fetchedData)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider