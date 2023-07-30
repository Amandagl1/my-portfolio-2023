import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Portrait from '../assets/portrait.jpg'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed px-5 w-full h-[100px] flex justify-between items-center text-white bg-[#3a2678]'>

      <div>
        <img src={Portrait}
          alt="Self Portrait"
          className='rounded-full my-3'
          style={{ width: '75px', height: '75px' }} />
      </div>

      {/* When screen reaches a medium display, show menu in navbar */}
      <ul className='hidden md:flex font-[Poppins] drop-shadow-md text-white'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Trigram button / x */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-[#3a2678]'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu display on moblie screen */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-white bg-[#3a2678]'}>
        <li className='py-4 text-2xl'>Home</li>
        <li className='py-4 text-2xl'>About</li>
        <li className='py-4 text-2xl'>Skills</li>
        <li className='py-4 text-2xl'>Work</li>
        <li className='py-4 text-2xl'>Contact</li>
      </ul>

      {/* Socials */}
      <div className='hidden lg:flex flex-col fixed bottom-[20px] drop-shadow-xl'>
        <ul>
          <li className='w-[150px] h-[50px] flex justify-between items-center rounded-tr-lg ml-[-116px] hover:rounded-r-lg hover:ml-[-20px] duration-300 bg-[#1666C2]'>
            <a className='w-full flex justify-between items-center  text-white'
              href="https://linkedin.com/in/amanda-lee-03a33826b/">
              LinkedIn <FaLinkedin size={25} />
            </a>
          </li>
          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-116px] hover:rounded-r-lg hover:ml-[-20px] duration-300 bg-[#E6EDF3]'>
            <a className='w-full flex justify-between items-center text-[#010409]'
              href="https://github.com/Amandagl1">
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-116px] hover:rounded-r-lg hover:ml-[-20px] duration-300 bg-[#5D77F6]'>
            <a className='w-full flex justify-between items-center text-white'
              href="/">
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className='w-[150px] h-[50px] flex justify-between items-center rounded-br-lg ml-[-116px] hover:rounded-r-lg hover:ml-[-20px] duration-300 bg-[#57C39F]'>
            <a className='w-full flex justify-between items-center text-white'
              href="https://docs.google.com/document/d/e/2PACX-1vRS_61Qdhbj7-7J7p-42YKqHuiEdnKmw8YUMVGi4OtSL4fjifB7dJWoBFYvXJ69oQIHZFDFW6mGFMXA/pub?embedded=true">
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
