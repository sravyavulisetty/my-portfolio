import React, { useEffect, useState } from 'react';
import data from '../data.json';
import { FaLaptopCode } from "react-icons/fa6";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  githublink: string;
  skills: string[];
  imagelink: string;
}

const App = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center z-10 bg-[#FFFAE6]' id='projects'>
      <div className='font-bold text-2xl flex flex-row justify-center gap-1'>
        <FaLaptopCode size={30}/>
        <h1>Projects</h1>
      </div>
      <div className='flex flex-row items-center justify-between gap-20 mt-20 mx-32'>
        {data.projects.map((project) => (
          <section 
            key={project.id}
            className='w-1/3 flex flex-col project-sec'>
            {/* <img src={`${project.imagelink}`} className='w-full h-60'></img> */}
            <img src={require(`../assets/${project.imagelink}`)} className='w-full h-60' alt = "ProjectImage"></img>
            <div className='project px-3 pb-8 pt-3 rounded-sm'> 
              <h1 className='font-semibold'>{project.title}</h1>
              <p className='text-xs'>{project.subtitle}</p>
              <div className='flex justify-between'>
                <button className='bg-[#002379] text-sm text-white py-1 px-2 hover:bg-[#FF5F00]'><a href={project.websitelink} target='_blank'>View</a></button>
                <button className='bg-[#002379] text-sm text-white py-1 px-2 hover:bg-[#FF5F00]'><a href={project.githublink} target='_blank'>Source</a></button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;



