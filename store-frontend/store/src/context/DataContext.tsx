import React, { createContext } from 'react'

interface ContextType {
  data: [object],
  setData: React.Dispatch<React.SetStateAction<[object]>>
}

const DataContext = createContext<ContextType>()

export default DataContext