import { FiUser, FiCode, FiDatabase, FiBarChart2, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">

      {/* Section Heading */}
      <motion.div
        className="section-title about-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p>GET TO KNOW ME</p>

        <h2>
          About <span>Me</span>
        </h2>

        <div className="title-line"></div>
      </motion.div>

      {/* Main About Wrapper */}
      <div className="about-wrapper">

        {/* Left Side */}
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-badge">
            <span></span>
            WHO I AM
          </span>

          <h3>
            Passionate about
            <span> building digital experiences.</span>
          </h3>

          <p>
            I'm Kesavan Sundarpandiyan, a passionate Computer Science
            student and aspiring Full Stack Developer. I enjoy creating
            modern, responsive and user-friendly web applications.
          </p>

          <p>
            My main focus is on developing practical applications using
            modern web technologies. I'm continuously improving my skills
            by learning new technologies and building real-world projects.
          </p>

          <a href="#contact" className="about-contact-btn">
            Let's Connect
            <FiArrowRight />
          </a>

        </motion.div>


        {/* Right Side */}
        <motion.div
          className="about-details"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="about-card">

            <div className="about-card-icon">
              <FiCode />
            </div>

            <div>
              <h4>Web Development</h4>

              <p>
                Building responsive and modern interfaces using
                React, JavaScript, HTML and CSS.
              </p>
            </div>

          </div>


          <div className="about-card">

            <div className="about-card-icon">
              <FiDatabase />
            </div>

            <div>
              <h4>Backend Development</h4>

              <p>
                Developing server-side applications and APIs using
                Node.js, Express.js and databases.
              </p>
            </div>

          </div>


          <div className="about-card">

            <div className="about-card-icon">
              <FiBarChart2 />
            </div>

            <div>
              <h4>Data & Analytics</h4>

              <p>
                Exploring data analytics, visualization and
                machine learning to solve real-world problems.
              </p>
            </div>

          </div>


          {/* Quick Info */}

          <div className="about-info-grid">

            <div className="about-info">
              <span>Focus</span>
              <strong>Full Stack Development</strong>
            </div>

            <div className="about-info">
              <span>Currently Learning</span>
              <strong>MERN Stack & ML</strong>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;