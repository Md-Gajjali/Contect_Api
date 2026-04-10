import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/ContextAPi'


function App() {

  const {name,setName}=useContext(ThemeContext)

  const toggle =()=> {
    
  }


  function handleClick(){
    setName("saleh")
  }
  return (
    <>
      <div>
        <h2>Name:{name} </h2>
        <p className='p'></p>
        <button onClick={handleClick}>fuck me</button>
      </div>
    </>
  )
}

export default App
