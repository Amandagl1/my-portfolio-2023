import React from 'react'

const About = () => {
  return (
    <div name='about' className='offset-padding w-full h-full'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-6'>
          <div className='sm:text-right pb-6 pl-4'>
            <h2 className='inline border-b-8 text-[#fff] border-[#86B3D1]'>
              About
            </h2>
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 text-[#000]'>

          <div className='text-2xl pl-4 sm:text-3xl sm:text-right'>
            <p>
              Glad you're here, I'm Amanda.
              <br />
              Feel free to browse around my portfolio.
            </p>
          </div>

          {/* About me paragraphs */}
          <div>
            <p className='text-md px-6 sm:text-md'>
              As a web developer with a strong understanding of HTML, CSS, and Javascript, I blend technical proficiency with a keen eye to create engaging digital experiences.
              I am passionate about conveying narratives through my unique perspective and applying creativity to all aspects of my work.
              Following my BA in Creative Media - Digital Cinema, I transitioned into web development for more opportunities.
            </p>
            <br />
            <p className='text-md px-6 sm:text-md'>
              Motivated by the pursuit of growth and possibilities, I started a journey that brought me to the tech community of Washington State.
              I cultivated invaluable connections, formed amazing friendships, and remained dedicated to expanding my professional education in tech.
              This journey resulted in my successful completion of the "Full Stack Web Development" certification program at Southern Methodist University.
            </p>
            <br />
            <p className='text-md px-6 sm:text-md'>
              I continue to embrace each opportunity as a chance to learn, grow, and refine my capabilities.
              Whether through mentorship, collaboration with peers, or immersion in new experiences, I am committed to elevating my skills and knowledge.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About