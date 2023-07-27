import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#241a4d]'>

      {/* Introduction */}
      <div className='px-8 mx-auto max-w-[1000px] h-full flex flex-col justify-center'>
        <p>Hi, my name is</p>
        <h1>Amanda</h1>
        <h2>I'm a Full Stack Web Developer.</h2>
      </div>
    </div>
  )
}

export default Home