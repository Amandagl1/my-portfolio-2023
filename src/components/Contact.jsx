import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='static w-full h-screen p-4 flex justify-center items-center bg-[#9478D9]'>

      <div>
        <form action="" className='max-w-[500px] w-full flex flex-col'>
          <div className='pb-8'>
            <h2 className='font-[Limelight] inline border-b-8 text-[#1C2439] border-[#3a2678]'>
              Contact
            </h2>
            <p className='mt-4 text-xl'>Reach me here --- Looking forward to hear from you!</p>
          </div>
          <input name='name' className='py-1 rounded-md text-[#3a2678] bg-[#F3D9E2]' type="text" placeholder='  Full name' />
          <input name='email' className='my-2 py-1 rounded-md text-[#1C2439] bg-[#F3D9E2]' type="email" placeholder='  Email' />
          <textarea name="message" className='py-2 rounded-md bg-[#F3D9E2]' rows="8" placeholder='  Type a message here...'></textarea>
          <button className='
                   w-[130px] font-[Poppins] shadow-lg rounded-lg
                   mx-auto my-8 py-3 flex justify-center text-center duration-300
                 text-white bg-[#3a2678] hover:bg-[#5e68e8] hover:shadow-inner'>
            Submit
          </button>
        </form>

        <div className='absolute w-full flex max-w-[500px] justify-center mt-[18px]'>
          <p>
            Made with ❤️ by Amanda Lee
          </p>
        </div>
      </div>

    </div>


  )
}
