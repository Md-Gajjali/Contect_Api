import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeProvider'

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext)
  
  return (
    <nav className={`navbar ${theme}`}>
        <div className="container flex justify-between mx-auto py-10 items-center ">
            <h2>Navbar</h2>
            <ul className='flex gap-10'>
                <li>home</li>
                <li>about</li>
                <li>services</li>
                <li>contact</li>
                <li>login</li>
            </ul>
            <div>
                <button onClick={toggle} className="theme-toggle-btn">
                  {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
