import { useContext, useEffect, useState } from 'react'
import './App.css'
import { ThemeContext } from './context/ContextAPi'
import Navbar from './componets/Navbar'
import Card from './componets/card'


function App() {

  // const {name,setName}=useContext(ThemeContext)

  // const toggle =()=> {
  //   setName(name == "apon" ? "saleh" : "apon")
  // }


  // function handleClick(){
  //   toggle()
  // }


  const [user,setUser]=useState([ ])
  useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then((data)=> setUser(data.users));
  },[])

  

  return (
    <>

      <Navbar/>
      <div className='flex justify-center flex-wrap gap-5 '>
          {
            user.map((item)=>(
              <Card 
                imges={item.image}
                name={item.firstName}
                />

            ))
          }
      </div>
    </>
  )
}

export default App
