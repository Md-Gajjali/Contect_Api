import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/ContextAPi'


function App() {

  const {name,setName}=useContext(ThemeContext)


  return (
    <>
      <div>
        <h2>Name:{name} </h2>
        <p className='p'></p>
        <button onClick={()=>setName({name:"John"})}>click</button>
      </div>
    </>
  )
}

export default App
