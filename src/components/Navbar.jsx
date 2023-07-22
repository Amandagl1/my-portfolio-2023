import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Portrait from '../assets/portrait.jpg'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-5 bg-[#BDFAFE]'>

      <div>
        <img src={Portrait}
          alt="Self Portrait"
          className='rounded-full my-3'
          style={{ width: '75px', height: '75px' }} />
      </div>

      {/* When screen reaches a medium size, display ul */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>


      <div className='hidden'>
        <FaBars />
      </div>

      {/* Hide menu when screen is mobile size */}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      <div className='hidden'></div>

    </div>
  )
}

export default Navbar
