import React from 'react'
import MoviesThatMove from '../assets/moviesthatmove.png'
import Momentum from '../assets/momentum.png'
import Mojave from '../assets/mojave.png'
import JATE from '../assets/jate.png'
import NoteTaker from '../assets/notetaker.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-full text-[#1C2439]'>
      <div className='
            max-w-[900px] mx-auto w-full h-full p-4
            flex flex-col justify-center items-center'>

        <div className='mt-6 inline justify-center text-center'>
          <h2 className='
                 pb-4 text-center items-center
                border-b-8 border-[#3a2678]'>
            Work
          </h2>
          <p className='font-[Poppins] text-xl py-6 flex justify-center'>
            Projects that I've created or collaborated on with other developers.
          </p>

          {/* Container for all projects */}
          <div className='grid sm:grid-col-2 md:grid-cols-3 gap-4'>
            {/* Using temperate literals to import background image into styling */}
            {/* Project card 1 */}
            <div style={{ backgroundImage: `url(${MoviesThatMove})` }}
              className='
                mx-auto group container border-y-8 border-[#1C2439] rounded-md
                flex justify-center items-center work-content
                shadow-lg shadow-[#f7d48f]'>

              {/* When user hovers over projects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='font-[Poppins] text-4xl text-white tracking-wider'>

                  Movies That Move

                </span>
                <div className='pt-8 text-center'>
                  <a href="https://1jessep.github.io/moviesthatmoveproject/">
                    <button className='
                            font-[Lobster] m-2 px-6 py-2 rounded-lg 
                            text-2xl text-center text-white bg-[#9478D9]'>
                      View
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Project card 2 */}
            <div style={{ backgroundImage: `url(${Momentum})` }}
              className='
                mx-auto group container border-y-8 border-[#1C2439] rounded-md
                flex justify-center items-center work-content
                shadow-lg shadow-[#f7d48f]'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='font-[Poppins] text-4xl text-white tracking-wider'>

                  Momentum

                </span>
                <div className='pt-8 text-center'>
                  <a href="https://momentum100.herokuapp.com/">
                    <button className='
                            font-[Lobster] m-2 px-6 py-2 rounded-lg 
                            text-2xl text-center text-white bg-[#9478D9]'>
                      View
                    </button>
                  </a>
                  
                </div>
              </div>
            </div>
           
            
            {/* Project card 3 */}
            <div style={{ backgroundImage: `url(${Mojave})` }}
              className='
                mx-auto group container border-y-8 border-[#1C2439] rounded-md
                flex justify-center items-center work-content
                shadow-lg shadow-[#f7d48f]'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='font-[Poppins] text-4xl text-white tracking-wider'>

                  Mojave

                </span>
                <div className='pt-8 text-center'>
                  <a href="https://mojave-store.herokuapp.com/">
                    <button className='
                            font-[Lobster] m-2 px-6 py-2 rounded-lg 
                            text-2xl text-center text-white bg-[#9478D9]'>
                      View
                    </button>
                  </a>
                  
                </div>
              </div>
            </div>
            
            {/* Project card 4 */}
            <div style={{ backgroundImage: `url(${JATE})` }}
              className='
                mx-auto group container border-y-8 border-[#1C2439] rounded-md
                flex justify-center items-center work-content
                shadow-lg shadow-[#f7d48f]'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='font-[Poppins] text-4xl text-white tracking-wider'>

                  JATE

                </span>
                <div className='pt-8 text-center'>
                  <a href="https://amandas-text-editor.herokuapp.com/">
                    <button className='
                            font-[Lobster] m-2 px-6 py-2 rounded-lg 
                            text-2xl text-center text-white bg-[#9478D9]'>
                      View
                    </button>
                  </a>
                  
                </div>
              </div>
            </div>

            {/* Project card 5 */}
            <div style={{ backgroundImage: `url(${NoteTaker})` }}
              className='
                mx-auto group container border-y-8 border-[#1C2439] rounded-md
                flex justify-center items-center work-content
                shadow-lg shadow-[#f7d48f]'>

              <div className='opacity-0 group-hover:opacity-100'>
                <span className='font-[Poppins] text-4xl text-white tracking-wider'>

                  Note Taker

                </span>
                <div className='pt-8 text-center'>
                  <a href="https://note-taker-2023.herokuapp.com/">
                    <button className='
                            font-[Lobster] m-2 px-6 py-2 rounded-lg 
                            text-2xl text-center text-white bg-[#9478D9]'>
                      View
                    </button>
                  </a>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Work