import React, { useContext, useState } from 'react'
import user from '../assets/slogo copy.jpg'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from '../theme';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {theme, toggleTheme} = useTheme();
  return (
    <nav className='w-screen bg-[#FFFAE6] flex justify-between items-center px-10 fixed z-20 pt-2 pb-2 lg:pl-24'>
        <img src={user} className='w-10 h-10 rounded-full logo mt-2' alt='s-logo'/> 
        {/* desktop */}
        <ul className='hidden md:flex gap-6 tracking-wide items-center'>
            <li className='nav-link nav-link-ltr'><a href='#home'>Home</a></li>
            <li className='nav-link nav-link-ltr'><a href='#aboutme'>About</a></li>
            <li className='nav-link nav-link-ltr'><a href='#experience'>Experience</a></li>
            <li className='nav-link nav-link-ltr'><a href='#projects'>Projects</a></li>
            <li className='nav-link nav-link-ltr'><a href='#contact'>Contact</a></li>
            {/* <li className='cursor-pointer'>{theme === 'light' ? <MdOutlineLightMode onClick={toggleTheme} size={20} className='icon'/> : <MdDarkMode onClick={toggleTheme} size={23} className='icon'/>}</li> */}
        </ul>
        
        {/* mobile */}
        <div className='flex md:hidden flex-col items-end gap-4'>
        <button onClick={()=>setIsOpen((prev) => !prev)} className='block md:hidden'>
            <svg
            className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
            className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
        </button>
        {/* mobile menu */}
        <ul className={
          isOpen
            ? 'fixed md:hidden h-auto flex flex-col items-end gap-4 mt-12 ease-in-out duration-500 bg-[#FFFAE6]'
            : 'hidden'
        }>
            <li className='nav-link nav-link-ltr text-end'><a href='#home'>Home</a></li>
            <li className='nav-link nav-link-ltr'><a href='#aboutme'>About me</a></li>
            <li className='nav-link nav-link-ltr'><a href='#experience'>Experience</a></li>
            <li className='nav-link nav-link-ltr'><a href='#projects'>Projects</a></li>
            <li className='nav-link nav-link-ltr'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
