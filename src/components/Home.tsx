
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, type Container } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import data from '../data.json';
import useDownloader from "react-use-downloader";
import userimage from '../assets/girl_developer.svg'


const Home = () => {
    const {download} = useDownloader();
    const fileName = "sravya_resume.pdf";

    const [init, setInit] = useState(false);
    useEffect(() => {
      initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    }, []);

  const particlesLoaded =  async(container?: Container): Promise<void> => {
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#FFFAE6",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
        },
      },
      particles: {
        color: {
          value: "#FF5F00",
        },
        links: {
          color: "#FF5F00",
          distance: 150,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        collisions: {
            enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  return (
    <div className="h-auto flex flex-col lg:flex-row items-center mt-16 md:mt-24 justify-center m-10 lg:mr-10 lg:ml-36 lg:-mt-8" id="home">
        <Particles id='tsparticles' particlesLoaded={particlesLoaded} options={options} />
        <div className="absolute left-0 bg-[#ff670e] w-12 items-center p-2 rounded-md py-3 hidden lg:block">
            <a href={data.github_link} target='_blank'><FaGithub size={27} className="hover:fill-[#000000]" fill="white"/></a>
            <a href={data.linkedin_link} target='_blank'><AiOutlineLinkedin size={27} className='hover:fill-[#0077B5] mt-2' fill="white"/></a>
            <a href={data.instagram_link} target='_blank'><FaInstagram size={27} className='hover:fill-[#e1306c] mt-2' fill="white"/></a>
        </div>
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 gap-4 lg:gap-5">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#002379]">Hello,
            </h1>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-[#002379]">I am <span className="text-[#FF5F00]">{data.name}</span></h1>
            <p className="italic font-xs sm:text-normal text-[14px]">{data.tagline}</p>
            <div className="flex gap-10 sm:items-start sm:justify-start md:items-start">
                <button className="bg-[#FF5F00] text-white border border-white px-3 py-2 text-sm rounded-3xl hover:font-semibold hover:italic" onClick={()=>download(data.resume_link, fileName)}>Download Resume</button>
                <a href='#aboutme'>
                  <button className="border text-[#002379] border-[#FF5F00] px-3 py-2 text-sm rounded-3xl hover:font-semibold hover:italic">
                    About me 
                  </button>
                </a>
            </div>
        </div>
        <img src={userimage} className="w-screen md:w-3/4 lg:w-1/2 h-full"></img>
    </div> 
  )
  
};

export default Home;
