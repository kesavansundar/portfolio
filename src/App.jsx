import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';
function App(){
    return(
      <>
        <Navbar/>
        
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Certificates/>
        <Contact/>
      </>
    )
}
export default App;;