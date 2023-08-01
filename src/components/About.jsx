import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-white bg-[#9478D9]'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='font-[Pacifico] text-4xl font-bold inline border-b-4 text-[#3a2678] border-[#3a2678]'>
              About
            </p>
          </div>
          <div>
            <p>
            {/* text here */}
            </p>
          </div>

        </div>

        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

            <div className='text-2xl sm:text-4xl sm:text-right font-bold'>
              <p>
                Glad you're here, I'm Amanda.
                Feel free to browse around my portfolio.
              </p>
            </div>
            <div>
              <p className='text-md sm:text-xl font-bold'>
              About a year ago, I moved to a whole new state, decided to change career paths from film to coding, and earned a certificate from a coding boot camp. 
              In one year, I have grown more than I could've ever imagined and I have formed a ton of amazing connections. 
              <br />
              This upcoming year, I plan to expand my knowledge further and build connections in my career and personal life. 
              The opportunities that I have leaped at have been life-changing, and I am excited for the possibilities that lie ahead.
              </p>
            </div>

          </div>
      </div>
    </div>
  )
}

export default About