import React from 'react'
import data from '../data.json';
import '../index.css';
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className='h-3/4 flex flex-col justify-center items-center z-10' id='experience'>
      <div className='font-bold text-2xl flex justify-center gap-1 text-center'>
        <FaBriefcase className='mt-0.5'/>
        <h1>Experience</h1>
      </div>
      <div className='flex flex-row items-center justify-between gap-20 mt-24 mx-32'>
       {data.experience.map((a) => (
        <section key={a.id} className='p-10 rounded-md w-1/2 h-1/2 card bg-[#FFFAE6]'>
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
