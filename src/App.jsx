import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';
function App(){
    return(
      <>
        <Navbar/>
        
        <Hero/>
          <section id='about'>
            <h1>About</h1>
          </section>
          <section id='skills'>
            <h1>Skills</h1>
          </section>
          <section id='project'>
            <h1>Project</h1>
          </section>
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