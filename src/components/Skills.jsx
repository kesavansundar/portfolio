import {
  FiCode,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiGitBranch,
  FiBarChart2,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      icon: <FiMonitor />,
      title: "Frontend Development",
      description: "Creating responsive and modern user interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      description: "Building APIs and server-side applications.",
      skills: ["Node.js", "Express.js", "REST API"],
    },
    {
      icon: <FiDatabase />,
      title: "Database",
      description: "Working with databases and data management.",
      skills: ["MongoDB", "MySQL"],
    },
    {
      icon: <FiCode />,
      title: "Programming",
      description: "Programming languages used for development.",
      skills: ["JavaScript", "Python"],
    },
    {
      icon: <FiGitBranch />,
      title: "Tools & Technologies",
      description: "Tools I use for development and collaboration.",
      skills: ["Git", "GitHub", "VS Code", "Vite"],
    },
    {
      icon: <FiBarChart2 />,
      title: "Data & Machine Learning",
      description: "Exploring data analysis and machine learning.",
      skills: ["Pandas", "NumPy", "Machine Learning"],
    },
  ];

  return (
    <section id="skills" className="skills-section">

      {/* Heading */}
      <motion.div
        className="section-title skills-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p>WHAT I WORK WITH</p>

        <h2>
          My <span>Skills</span>
        </h2>

        <div className="title-line"></div>
      </motion.div>


      {/* Skills Grid */}
      <div className="skills-grid">

        {skillCategories.map((category, index) => (
          <motion.div
            className="skill-card"
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >

            <div className="skill-card-top">

              <div className="skill-icon">
                {category.icon}
              </div>

              <span className="skill-number">
                0{index + 1}
              </span>

            </div>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

            <div className="skill-list">

              {category.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>
        ))}

      </div>


      {/* Bottom Text */}
      <motion.div
        className="skills-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FiCode />

        <p>
          Always learning, always building, always improving.
        </p>
      </motion.div>

    </section>
  );
}

export default Skills;