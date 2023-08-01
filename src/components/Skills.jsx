import React from 'react'

// Import images from assets
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import NodeJs from '../assets/node.png'
import MongoDb from '../assets/mongo.png'
import ReactPng from '../assets/react.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-full sm:h-screen text-white bg-[#1C2439]'>
      <div className='
            max-w-[900px] mx-auto w-full h-full p-5
            flex flex-col justify-center items-center'>
        <h2 className='
              font-[Limelight] w-[450px] mt-4 py-4 inline text-center
              border-b-8 text-[#F3D9E2] border-[#c557c9]'>
          Skills
        </h2>
        <p className='pt-4 text-xl'>
          Some technologies I have worked with
        </p>

        {/* Technology icons */}
        <div className='w-full py-8 grid grid-cols-2 sm:grid-cols-4 gap-5 text-center'>
          {/* HTML */}
          <div className='
                shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/50 duration-500'>
            <a href="/">
              <img className='w-20 mx-auto py-4' src={HTML} alt="HTML icon" />
            </a>
          </div>
          {/* CSS */}
          <div className='
                shadow-lg hover:scale-110 hover:shadow-xl duration-500 hover:shadow-cyan-500/50'>
            <a href="/">
              <img className='w-20 mx-auto py-4' src={CSS} alt="CSS icon" />
            </a>
          </div>
          {/* Javascript */}
          <div className='
                shadow-lg hover:scale-110 hover:shadow-xl duration-500
              sm:hover:shadow-indigo-500/50 hover:shadow-cyan-500/50'>
            <a href="/">
              <img className='w-20 mx-auto py-4' src={Javascript} alt="Javascript icon" />
            </a>
          </div>
          {/* NodeJs */}
          <div className='
                shadow-lg hover:scale-110 hover:shadow-xl duration-500
              hover:shadow-indigo-500/50 sm:hover:shadow-cyan-500/50'>
            <a href="/">
              <img className='w-20 mx-auto py-4' src={NodeJs} alt="NodeJs icon" />
            </a>
          </div>
          {/* MongoDB */}
          <div className='
                shadow-lg hover:scale-110 hover:shadow-xl duration-500
              hover:shadow-indigo-500/50 sm:hover:shadow-cyan-500/50'>
            <a href="/">
              <img className='w-20 mx-auto py-4' src={MongoDb} alt="MongoDB icon" />
            </a>
          </div>
          {/* React */}
          <div className='
                shadow-lg hover:scale-110 hover:shadow-xl duration-300
                hover:shadow-cyan-500/50 sm:hover:shadow-indigo-500/50'>
            <a href="/">
              <img className='w-20 mx-auto py-4' src={ReactPng} alt="React icon" />
            </a>
          </div>
          {/* GitHub */}
          <div className='
                shadow-lg hover:scale-110 hover:shadow-xl duration-300 
                hover:shadow-cyan-500/50'>
            <a href="/">
              <img className='w-20 mx-auto py-4' src={GitHub} alt="GitHub icon" />
            </a>
          </div>
          {/* Tailwind */}
          <div className='
                shadow-lg hover:scale-110 hover:shadow-xl duration-300
                hover:shadow-indigo-500/50'>
            <a href="/">
              <img className='w-20 mx-auto py-4' src={Tailwind} alt="Tailwind icon" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills