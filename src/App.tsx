import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './theme';
import { useTheme } from './theme';
import './index.css';
import Footer from './components/Footer';
import 'animate.css'
function AppContent() {
  const {theme} = useTheme();
  return (
      <div className='flex flex-col justify-center items-center gap-10  bg-[#FFFAE6] overflow-x-hidden' data-theme={theme}>
        <header className='w-screen h-16'>
          <Navbar/>
        </header>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

function App(){
  return (
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  )
}
export default App;
