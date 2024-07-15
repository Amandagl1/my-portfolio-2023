import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Portrait from '../assets/portrait.jpg'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed px-5 w-full h-[100px] flex justify-between items-center bg-[#1C2439]'>

      <div>
        <img src={Portrait}
          alt="Self Portrait"
          className='rounded-full my-3'
          style={{ width: '75px', height: '75px' }} />
      </div>

      {/* When screen reaches a medium display, show menu in navbar */}
      <ul className='hidden md:flex font-[Poppins] drop-shadow-md text-white'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Trigram button and X */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-white'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu display on moblie screen */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-[#FCF1EF] bg-[#1C2439]'}>
        
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
        <li className='py-4 text-2xl'> 
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-4 text-2xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
