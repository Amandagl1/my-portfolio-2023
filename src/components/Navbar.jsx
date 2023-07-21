import React from 'react'
import Portrait from '../assets/portrait.jpg'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[100px] justify-between items-center px-5 bg-[#BDFAFE]'>
      <div>
        <img src={Portrait}
          alt="Self Portrait"
          className='rounded-full my-3'
          style={{ width: '75px', height: '75px'}} />
      </div>
    </div>
  )
}

export default Navbar
