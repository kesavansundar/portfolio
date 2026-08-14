import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
function App(){
    return(
      <>
        <Navbar/>
        
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
          <section id='education'>
            <h1>Education</h1>
          </section>
          <section id='contact'>
            <h1>Contact</h1>
          </section>
        
        
      </>
    )
}
export default App;;