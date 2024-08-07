import React, { useState } from 'react'
import backgroundImage from '/Users/amanda/Coding/my-portfolio/src/assets/seattleskyline.png'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  // Background image of the homepage
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'auto',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    // height: '100vh',
  };

  return (
    <div name='home' style={styles} className='w-full h-screen pt-[40px] justify-center'>

      {/* Introduction */}
      <div className='
      pt-20 px-10 mx-auto max-w-[800px] h-full
      flex flex-col justify-center'>

        <p className='font-[Pacifico] text-4xl md:text-5xl md:mt-2 text-shadow-style text-[#86B3D1]'>
          Hi, my name is
        </p>
        <h1 className='mx-5 mt-4 mb-2 text-5xl md:text-6xl font-bold text-[#000]'>
          AMANDA LEE
        </h1>

        {/* Title */}
        <div className='mx-5 mb-1 text-2xl'>
          <p className='w-[285px] py-1 hover:scale-105 duration-200'>
            <a className='hover:text-[#86B3D1] cursor-point' href="https://linkedin.com/in/amanda-lee-03a33826b/">
              Full Stack Web Developer
            </a>
          </p>
          <span className='ml-[20px]'>
            with a background in Creative Media - Digital Cinema.
          </span>
        </div>

        {/* Background information */}
        <p className='
            max-w-[760px] lg:max-w-[1000px]
            font-[Poppins] text-shadow-style text-[#fff]'>
          Continued professional education in web development and received a certificate in Full Stack Web Development from Southern Methodist University.
          <br />
          Acquired skills focused on HTML5, CSS3, Javascript, Rest APIs, jQuery, Node.js, Express, SQL, PWA, React.js, MERN, etc.
        </p>

        <div>
          <li className='
                   font-[Poppins] shadow-lg rounded-lg justify-center items-center
                   w-[150px] my-4 px-4 py-3 flex text-center gap-2 duration-300 
                   shadow-style text-white bg-[#86B3D1] hover:bg-[#6590ad] hover:shadow-inner'>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              View Work
            </Link>
            <span>
              <FaArrowAltCircleRight />
            </span>
          </li>
          {/* <button className='
                   font-[Poppins] shadow-lg rounded-lg items-center
                   my-4 px-4 py-3 flex text-center gap-2 duration-300
                   text-white bg-[#9478D9] hover:bg-[#5e68e8] hover:shadow-inner'>
            View Work
            <span>
              <FaArrowAltCircleRight />
            </span>
          </button> */}
        </div>

      </div>
    </div>
  )
}

export default Home