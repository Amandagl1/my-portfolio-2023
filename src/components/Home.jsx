import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#9478D9]'>

      {/* Introduction */}
      <div className='pt-20 px-10 mx-auto max-w-[1000px] h-full flex flex-col justify-center'>

        <p className='font-[Pacifico] text-5xl md:mt-2 drop-shadow-xl text-white'>Hi, my name is</p>
        <h1 className='mx-5 mt-4 mb-2 text-6xl font-bold'>Amanda Lee</h1>

        {/* Title */}
        <h2 className='mx-5 mb-2 text-2xl lg:text-3xl'>
          Full Stack Web Developer 
          <br />
          <span className='ml-[20px]'>with a background in Creative Media - Digital Cinema.</span>
        </h2>

        {/* Background information */}
        <p className= 'max-w-[760px] font-[Poppins] text-white drop-shadow-md lg:text-2xl'>
          Continued professional education in web development and received a certificate in Full Stack Web Development from Southern Methodist University.
          <br />
          Acquired skills focused on HTML5, CSS3, Javascript, Rest APIs, jQuery, Node.js, Express, SQL, PWA, React.js, MERN, etc.
        </p>

        <div>
          <button className='my-4 hover:drop-shadow-2xl'>
            View Work
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home