import data from '../data.json';
import { FaLaptopCode } from "react-icons/fa6";
const App = () => {
  return (
    <div className='h-auto flex flex-col justify-center items-center mt-20 lg:mt-10 z-10 bg-[#FFFAE6]' id='projects'>
      <div className='font-bold text-2xl flex flex-row justify-center gap-1'>
        <FaLaptopCode size={30}/>
        <h1>Projects</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-10 lg:w-auto md:mx-20 lg:h-auto lg:gap-20 mt-20 lg:mx-32 items-center justify-center'>
        {data.projects.map((project) => (
          <section 
            key={project.id}
            className='p-7 lg:p-2 w-auto mr-5 -ml-5 lg:mr-0 lg:-ml-0 lg:w-auto flex flex-col project-sec'>
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



