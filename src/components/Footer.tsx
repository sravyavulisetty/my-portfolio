import React from 'react'
import data from '../data.json';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";


const Footer = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row lg:flex-row lg:justify-between items-start z-10 bg-[#FFFAE6] h-auto w-screen p-5 lg:px-44 border-t-2 border-[#FF5F00]'>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-lg'>{data.name}'s portfolio</h1>
            <p>Thankyou for visiting my personal portfolio website. <br/>Connect with me over socials.</p>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-lg'>Quick Links</h1>
            <ul className='flex flex-col gap-1'>
                <a className='cursor-pointer hover:text-[#FF5F00]' href='#home'><li>Home</li></a>
                <a className='cursor-pointer hover:text-[#FF5F00]' href='#aboutme'><li>About</li></a>
                <a className='cursor-pointer hover:text-[#FF5F00]' href='#experience'><li>Experience</li></a>
                <a className='cursor-pointer hover:text-[#FF5F00]' href='#projects'><li>Projects</li></a>
            </ul>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-lg'>Contact Info</h1>
            <div className='flex items-center gap-2 text-sm'>
                <IoMdMail size={20}/>
                {data.emailId}
            </div>
            <div className='flex items-center gap-1 text-sm'>
                <MdLocationPin size={23}/>
                {data.location}
            </div>
            <ul className='flex flex-row items-center gap-3'>
                <a href={data.linkedin_link} target='_blank'><li><AiOutlineLinkedin size={27} className="hover:fill-[#0077B5]"/></li></a>
                <a href={data.github_link} target='_blank'><li><FaGithub size={25} className='hover:fill-[#000000]'/></li></a>
                <a href={data.instagram_link} target='_blank'><li><FaInstagram size={25}  className='hover:fill-[#e1306c]'/></li></a>
            </ul>
        </div>
    </div>
  )
}

export default Footer;
