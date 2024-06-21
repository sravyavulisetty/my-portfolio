import {useEffect} from 'react';
import data from '../data.json';
import { FaGithub, FaInstagram, FaUser } from "react-icons/fa";
import 'animate.css';
import { AiOutlineLinkedin } from 'react-icons/ai';


const About = () => {
  const parts = data.description.split(new RegExp(`(${data.role})`, 'gi'));
  useEffect(() => {
    const handleHashChange = () => {
      const navbar = document.querySelector('nav');
      const target = document.getElementById(window.location.hash.substring(1));
      if (navbar && target) {
        const navbarHeight = navbar.offsetHeight;
        window.scrollTo({
          top: target.offsetTop - navbarHeight,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className='h-screen flex flex-col justify-center items-center z-10 gap-10 mt-20 lg:mt-0' id='aboutme'>
      <div className='font-bold text-2xl flex justify-center gap-1 text-center'>
        <FaUser/>
        <h1>About Me</h1>
      </div>
      <div className='relative h-screen mt-2 lg:mt-8 w-screen flex flex-col lg:flex-row items-center justify-start lg:gap-16 py-2'>
        <section className='w-full h-screen md:h-1/2 lg:w-2/5 z-10 bg-[#ff7827] lg:h-full -z-1'>  
        </section>
        <div className='absolute m-2 top-5 h-1/2 p-5 md:h-2/5 lg:left-72 md:-top-20 lg:top-32 lg:h-3/5 z-10 lg:w-96 lg:py-10 lg:px-10 border border-[#FF5F00] bg-[#FFFAE6] text-center'>
            <p className='mt-10 lg:mt-2 text-sm text-justify'>
              {parts.map((part, index) =>
              part.toLowerCase() === data.role.toLowerCase() ? (
              <span key={index} style={{fontWeight: 'bold'}}>
              {part}
             </span>
             ) : (
            part
          )
        )}</p>
          <p className='mt-4 text-sm text-justify italic'>I'm open to <span className='font-bold'>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='font-bold'><a href='#contact'>contact</a></span> me.</p>
          <div className="flex flex-row items-center justify-center gap-5 mt-6 lg:hidden">
            <a href={data.github_link} target='_blank'><FaGithub size={27} className="hover:fill-[#000000]" fill="#FF5F00"/></a>
            <a href={data.linkedin_link} target='_blank'><AiOutlineLinkedin size={27} className='hover:fill-[#0077B5]' fill="#FF5F00"/></a>
            <a href={data.instagram_link} target='_blank'><FaInstagram size={27} className='hover:fill-[#e1306c]' fill="#FF5F00"/></a>
          </div>
        </div>
        <section className='p-5 lg:w-1/2 lg:z-1 lg:pl-20'>
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
