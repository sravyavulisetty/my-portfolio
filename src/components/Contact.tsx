import React from 'react'
import { FaHeadset } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import businessdeal from '../assets/Business deal-cuate.svg'

const Contact = () => {
  return (
    <div className='bg-[#173b87] w-3/4 h-3/4 flex flex-col items-center justify-center z-10 text-white p-10 mx-20' id='contact'>
      <div className='font-bold text-2xl flex flex-row justify-center gap-1 pt-10'>
        <FaHeadset/>
        <h1>Let's talk</h1>
      </div>
      <div className='w-full h-full flex justify-between items-center px-5 gap-10'>
        <form className='flex flex-col gap-1 w-1/2'>
            <h1 className='text-md font-semibold'>Write me a message 👇</h1>
            <label className='mt-4'>Name</label>
            <input type='text' placeholder='Your name' className='p-1.5 text-[#002379]' autoComplete='true'></input>
            <label className='mt-4'>Email</label>
            <input type='text' placeholder='Your emailId' autoComplete='true' className='p-1.5 text-[#002379]'></input>
            <label className='mt-4'>Message</label>
            <textarea placeholder='Your message' className='p-1.5 text-[#002379]'></textarea>
            <button className='flex items-center border justify-center border-white p-2 w-24 mt-10 gap-2 hover:bg-white hover:text-[#002379]'>
              <p>Send</p>
              <LuSend/>
            </button>
        </form>
        <div className='w-1/2 flex flex-col justify-center items-center'>
        <img src={businessdeal} className='p-4'></img>
        </div>
      </div>
    </div>
  )
}

export default Contact
