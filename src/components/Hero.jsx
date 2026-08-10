import {FiGithub, FiLinkedin, FiDownload} from "react-icons/fi";
import {motion} from "framer-motion";
function Hero(){
    return(
    <section id="home" className="hero">

      <motion.div className="hero-content"
      initial={{opacity:0, y:40}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.8}}>

        <p className="hero-greeting">
          Hi, I'm
        </p>

        <h1>
          Kesavan <span>Sundarpandiyan</span>
        </h1>

        <h2>
          Full Stack Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web
          applications using React, Node.js, Express and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub/>
          </a>

          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin/>
          </a>
        </div>

      </motion.div>
                  <div className="hero-image">
                <div className="profile-circle">
                    KS 
                </div>
            </div>

    </section>

    )
}
export default Hero;