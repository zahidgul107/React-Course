import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [name, setName] = useState('Peter')

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext
