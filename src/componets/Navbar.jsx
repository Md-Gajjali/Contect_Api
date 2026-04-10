import React from 'react'

const Navbar = () => {
  return (
    <nav>
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
                
                <button>click me</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
