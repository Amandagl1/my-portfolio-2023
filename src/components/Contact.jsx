import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export const Contact = () => {
  return (
    <div name='contact' className='offset-padding static w-full h-full p-4 flex justify-center items-center'>
      <div>
        <form method='POST' action="https://getform.io/f/f48fd6d1-7da8-4a48-940f-f307b0631fa5" className='max-w-[500px] w-full flex flex-col'>
          <div className='pb-8'>
            <h2 className='inline border-b-8 text-[#fff] border-[#86B3D1]'>
              Contact
            </h2>
            <p className='mt-6 text-[#fff] text-xl'>Reach me here - Looking forward to hear from you!</p>
            <p className='max-w-[286px] flex items-center gap-2 text-[#fff]'>Or email me here at {''}
              <span className='flex'>
                <BsArrowRight />
              </span>
              <span className='underline cursor-pointer hover:text-[#1C2439]'>
                <a href="mailto:leeandama@gmail.com">
                  Amanda Lee
                </a>
              </span>
            </p>
          </div>
          <input name='name' className='p-1 rounded-md text-[#3a2678] bg-[#333]' type="text" placeholder=' Full name' />
          <input name='email' className='my-2 p-1 rounded-md text-[#1C2439] bg-[#333]' type="email" placeholder=' Email' />
          <textarea name="message" className='px-1 py-2 rounded-md bg-[#333]' rows="8" placeholder=' Type a message here...'></textarea>
          <button className='
                   w-[130px] font-[Poppins] shadow-lg rounded-lg
                   mx-auto my-8 py-3 flex justify-center text-center duration-300
                 text-white bg-[#86B3D1] hover:bg-[#5e68e8] hover:shadow-inner'>
            Submit
          </button>
        </form>

        <div className='w-full text-center justify-center mt-[14px] mb-[175px]'>
          <p>
            Made with ❤️ by Amanda Lee
          </p>
        </div>
      </div>

    </div>


  )
}
