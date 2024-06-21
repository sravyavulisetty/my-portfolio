import React, { useEffect, useRef, useState } from 'react'
import { FaCircleArrowUp, FaHeadset } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import businessdeal from '../assets/Business deal-cuate.svg'
import emailjs from '@emailjs/browser';
import { wait } from '@testing-library/user-event/dist/utils';

const Contact = () => {
  useEffect(()=> emailjs.init('ewOXFAftU6VJOE1pu'),[]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("")

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const serviceId = 'service_0mr8753';
    const templateId = 'template_j109diu';
    try{
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: name,
        recipient: email,
        message: message
      });
      alert("mail sent successfully");
    }
    catch(e){
      console.log(e)
    }
    finally{
      setLoading(false);
    }
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className='bg-[#173b87] relative w-screen h-full lg:w-3/4 lg:h-3/4 flex flex-col items-center justify-center z-10 text-white p-10 mx-20 mt-20 lg:mt-10' id='contact'>
      <div className='font-bold text-2xl flex flex-row justify-center gap-1.5 pt-10'>
        <FaHeadset/>
        <h1>Let's talk</h1>
      </div>
      <div className='w-full mt-5 lg:mt-0 h-full flex flex-col lg:flex-row justify-between items-center px-5 gap-10'>
        <form className='flex w-full flex-col gap-1 lg:w-1/2'>
            <h1 className='text-md font-semibold'>Write me a message 👇</h1>
            <label className='mt-4' htmlFor='name'>Name</label>
            <input type='text' placeholder='Your name' id='name' required onChange={(e) => setName(e.target.value)} className='p-1.5 text-[#002379] text-sm' autoComplete='true'></input>
            <label className='mt-4' htmlFor='email'>Email</label>
            <input type='email' placeholder='Your emailId' id='email' required onChange={(e) => setEmail(e.target.value)} autoComplete='true' className='p-1.5 text-[#002379] text-sm'></input>
            <label className='mt-4' htmlFor='message'>Message</label>
            <textarea placeholder='Your message' onChange={(e) => setMessage(e.target.value)} id='message' className='p-1.5 text-[#002379] text-sm'></textarea>
            <button className='flex items-center border justify-center border-white p-2 w-24 mt-10 gap-2 hover:bg-white hover:text-[#002379]' onClick={handleSubmit}>
              <p>Send</p>
              <LuSend/>
            </button>
        </form>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
        <img src={businessdeal} className='p-4'></img>
        </div>
      </div>
      <a href='#home'><FaCircleArrowUp fill='#FF5F00' size={30} className='absolute -right-20 bottom-0'/></a>
    </div>
  )
}

export default Contact
