import { useContext } from 'react'
import './App.css'
import { AppProvider } from './context/ContextAPi'


function App() {

  const {name,setName} = useContext(AppProvider)
  console.log(setName)
   function handleClick () {
    toggle('saleh')
   }
  return (
    <>
      <div>
        <h2>Name:{name} </h2>
        <p className='p'></p>
        <button onClick={handleClick}>click</button>
      </div>
    </>
  )
}

export default App
