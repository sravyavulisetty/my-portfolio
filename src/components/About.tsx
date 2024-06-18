import React from 'react';
import data from '../data.json';
import { FaUser } from "react-icons/fa";
import 'animate.css';

const About = () => {
  const parts = data.description.split(new RegExp(`(${data.role})`, 'gi'));
  return (
    <div className='h-screen flex flex-col justify-center items-center z-10 gap-10' id='aboutme'>
      <div className='font-bold text-2xl flex justify-center gap-1 text-center'>
        <FaUser/>
        <h1>About Me</h1>
      </div>
      <div className='relative h-full w-screen flex flex-row items-center gap-16 py-2'>
        <section className='relative w-2/5 z-10 bg-[#ff7827] h-full -z-1'>  
        </section>
        <div className='absolute left-72 top-44 h-1/2 z-10 w-96 py-10 px-10 border border-[#FF5F00] bg-[#FFFAE6] text-center'>
            <p className='mt-2 text-sm text-justify'>
              {parts.map((part, index) =>
              part.toLowerCase() === data.role.toLowerCase() ? (
              <span key={index} style={{fontWeight: 'bold'}}>
              {part}
             </span>
             ) : (
            part
          )
        )}</p>
            <p className='mt-4 text-sm text-justify italic'>I'm open to <span className='font-bold'>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='font-bold'>contact</span> me.</p>
          </div>
        <section className='w-1/2 right-24 z-1 pl-20'>
            <h1 className='font-bold text-xl'>My Skills</h1>
            <ul className='flex flex-row flex-wrap gap-3 pt-4'>
            {data.skills.map((skill) => (
                <li className='bg-[#002379] p-2 rounded-md text-white text-sm hover:bg-[#ff7827]'>{skill}</li>
            ))}
            </ul>
        </section>
      </div>
    </div>
  )
}

export default About
