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
    <div className='h-screen flex flex-col justify-center items-center z-10 gap-10 mt-20 mb-20 lg:mt-0' id='aboutme'>
      <div className='font-bold text-2xl flex justify-center gap-1 text-center'>
        <FaUser/>
        <h1>About Me</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-2 mt-2 h-screen w-screen items-center justify-center'>
        <section className="relative bg-[#ff7827] min-h-96 items-center lg:h-full lg:w-3/4 lg:flex lg:items-center lg:justify-center">
          <div className="absolute bg-[#FFFAE6] min-h-96 top-0 lg:top-1/2 lg:-right-28 border-2 lg:border border-[#FF5F00] lg:min-h-[55%] lg:w-2/3 lg:transform lg:-translate-y-1/2 p-10 lg:py-12">
          <p className='text-sm text-justify'>
              {parts.map((part, index) =>
              part.toLowerCase() === data.role.toLowerCase() ? (
              <span key={index} style={{fontWeight: 'bold'}}>
              {part}
             </span>
             ) : (
            part
          )
          )}</p>
          <p className='text-sm text-justify italic pt-6'>I'm open to <span className='font-bold'>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className='font-bold'><a href='#contact'>contact</a></span> me.</p>
          <div className="flex flex-row items-center justify-center gap-5 p-6 lg:hidden">
            <a href={data.github_link} target='_blank'><FaGithub size={27} className="hover:fill-[#000000]" fill="#FF5F00"/></a>
            <a href={data.linkedin_link} target='_blank'><AiOutlineLinkedin size={27} className='hover:fill-[#0077B5]' fill="#FF5F00"/></a>
            <a href={data.instagram_link} target='_blank'><FaInstagram size={27} className='hover:fill-[#e1306c]' fill="#FF5F00"/></a>
          </div>
          </div>
        </section>

        <section className='p-5 lg:z-1 mr-10'>
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
