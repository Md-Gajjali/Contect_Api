import { createContext, useState } from "react"

export const AppProvider= createContext()

const ContextAPi = ({children}) => {
    const [name,setName]=useState('apon')
    
  return (
    <AppProvider value={{name,setName}} >
        {children}
    </AppProvider>
  )
}

export default ContextAPi
