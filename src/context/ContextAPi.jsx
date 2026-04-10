import { createContext, useState } from "react"

export const ThemeContext = createContext()



const ContextAPi = ({children}) => {

  const [name,setName]=useState("apon")
    
  return (
    <ThemeContext.Provider value={{name,setName}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ContextAPi
