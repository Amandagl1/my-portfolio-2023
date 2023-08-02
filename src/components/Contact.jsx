import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export const Contact = () => {
  return (
    <div name='contact' className='static w-full h-screen p-4 flex justify-center items-center bg-[#9478D9]'>

      <div>
        <form method='POST' action="https://getform.io/f/f48fd6d1-7da8-4a48-940f-f307b0631fa5" className='max-w-[500px] w-full flex flex-col'>
          <div className='pb-8'>
            <h2 className='font-[Limelight] inline border-b-8 text-[#1C2439] border-[#3a2678]'>
              Contact
            </h2>
            <p className='mt-4 text-xl'>Reach me here --- Looking forward to hear from you!</p>
            <p className='max-w-[286px] flex items-center gap-2 text-white '>Or email me here at {''}
              <span className='flex'>
                <BsArrowRight />
              </span>
              <span className='font-[Limelight] underline cursor-pointer text-[#F3D9E2] hover:text-[#3a2678]'>
                <a href="mailto:leeandama@gmail.com">
                  Amanda Lee
                </a>
              </span>
            </p>
          </div>
          <input name='name' className='p-1 rounded-md text-[#3a2678] bg-[#F3D9E2]' type="text" placeholder=' Full name' />
          <input name='email' className='my-2 p-1 rounded-md text-[#1C2439] bg-[#F3D9E2]' type="email" placeholder=' Email' />
          <textarea name="message" className='px-1 py-2 rounded-md bg-[#F3D9E2]' rows="8" placeholder=' Type a message here...'></textarea>
          <button className='
                   w-[130px] font-[Poppins] shadow-lg rounded-lg
                   mx-auto my-8 py-3 flex justify-center text-center duration-300
                 text-white bg-[#3a2678] hover:bg-[#5e68e8] hover:shadow-inner'>
            Submit
          </button>
        </form>

        <div className='w-full text-center justify-center mt-[14px]'>
          <p>
            Made with ❤️ by Amanda Lee
          </p>
        </div>
      </div>

    </div>


  )
}
