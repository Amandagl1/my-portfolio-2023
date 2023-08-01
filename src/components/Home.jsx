import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen pt-[40px] justify-center bg-[#E39686]'>

      {/* Introduction */}
      <div className='
      pt-20 px-10 mx-auto max-w-[800px] h-full
      flex flex-col justify-center'>

        <p className='font-[Pacifico] text-4xl md:text-5xl md:mt-2 text-[#EE5F3C]'>
          Hi, my name is
        </p>
        {/* white bee image with transparent background */}
        <h1 className='mx-5 mt-4 mb-2 text-5xl md:text-6xl font-bold text-[#1C2439]'>
          Amanda Lee
        </h1>

        {/* Title */}
        <h2 className='mx-5 mb-2 text-2xl'>
          <span className='font-bold'>Full Stack Web Developer</span>
          <br />
          <span className='ml-[20px]'>with a background in Creative Media - Digital Cinema.</span>
        </h2>

        {/* Background information */}
        <p className='
        max-w-[760px] lg:max-w-[1000px]
        font-[Poppins] text-white'>
          Continued professional education in web development and received a certificate in Full Stack Web Development from Southern Methodist University.
          <br />
          Acquired skills focused on HTML5, CSS3, Javascript, Rest APIs, jQuery, Node.js, Express, SQL, PWA, React.js, MERN, etc.
        </p>

        <div>
          <button className='
          font-[Poppins] shadow-lg
          my-4 px-4 py-3 border-2 
          flex items-center gap-2
          rounded-lg
          text-white bg-[#EE5F3C] border-[#EE5F3C] 
          hover:bg-[#4f5aec] hover:border-[#3a2678] hover:shadow-inner duration-300'>
            View Work
            <span className='hover:'>
              <FaArrowAltCircleRight />
            </span>
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home