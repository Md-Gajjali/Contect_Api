import { useContext, useEffect, useState } from 'react'
import './App.css'
import { ThemeContext } from './context/themeProvider'
import Navbar from './componets/Navbar'
import Card from './componets/card'


function App() {
  const { theme } = useContext(ThemeContext)

  const [user, setUser] = useState([ ])
  
  useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then((data)=> setUser(data.users));
  },[])

  return (
    <div className={`app ${theme}`}>
      <Navbar/>
      <div className='container flex justify-center flex-wrap gap-5 '>
          {
            user.map((item ,dx)=>(
              <Card 
                key={dx}
                imges={item.image}
                name={item.firstName}
                />
            ))
          }
      </div>
    </div>
  )
}

export default App
