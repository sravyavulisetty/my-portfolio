import React from 'react'
import data from '../data.json';
import '../index.css';
import { FaBriefcase } from "react-icons/fa";
import { FaCircleArrowUp } from 'react-icons/fa6';

const Experience = () => {
  return (
    <div className='h-auto flex flex-col justify-center items-center z-10 mt-32 md:-mt-20 lg:mt-8' id='experience'>
      <div className='font-bold text-2xl flex justify-center gap-1 text-center'>
        <FaBriefcase className='mt-0.5'/>
        <h1>Experience</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 lg:gap-20 lg:mt-24 lg:mx-32'>
       {data.experience.map((a) => (
        <section key={a.id} className='border-b border-b-[#FF5F00] lg:border-none p-10 lg:rounded-md w-screen h-full lg:h-auto lg:w-auto lg:relative card bg-[#FFFAE6]'>
            <h1 className='font-bold text-lg'>{a.company}</h1>
            <p className='font-semibold text-base'>{a.title}</p>
            <p className='text-sm italic'>{a.duration}</p>
            <p className='text-sm mt-2'>{a.description}</p>
        </section>
       ))}
      </div>
    </div>
  )
}

export default Experience;
