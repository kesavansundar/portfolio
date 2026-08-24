import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Learning Management System",
      category: "Full Stack Web Application",
      description:
        "A learning platform where students can access courses, practice questions, complete tasks and manage their learning activities.",
      image: "/projects/lms.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/",
      live: "#",
      featured: true,
    },

    {
      number: "02",
      title: "Portfolio Website",
      category: "Frontend Development",
      description:
        "A modern personal portfolio website built to showcase my skills, projects, education and professional journey.",
      image: "/projects/portfolio.png",
      technologies: ["React", "JavaScript", "CSS", "Framer Motion"],
      github: "https://github.com/",
      live: "#",
      featured: false,
    },

    {
      number: "03",
      title: "Student Management System",
      category: "Web Application",
      description:
        "A web application designed to manage student information, records and basic academic activities.",
      image: "/projects/student.png",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      github: "https://github.com/",
      live: "#",
      featured: false,
    },

    {
      number: "04",
      title: "Data Analytics Dashboard",
      category: "Data Analytics",
      description:
        "An interactive dashboard designed to visualize data and provide useful insights through charts and reports.",
      image: "/projects/analytics.png",
      technologies: ["Power BI", "Python", "Pandas", "Data Analysis"],
      github: "https://github.com/",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="projects-section">

      {/* Section Heading */}

      <motion.div
        className="section-title projects-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p>WHAT I'VE BUILT</p>

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="title-line"></div>
      </motion.div>


      {/* Projects */}

      <div className="projects-container">

        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${
              project.featured ? "featured-project" : ""
            }`}
            key={project.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >

            {/* Project Image */}

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-image-overlay">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View live project"
                >
                  <FiExternalLink />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View GitHub repository"
                >
                  <FiGithub />
                </a>
              </div>

              <span className="project-number">
                {project.number}
              </span>

              {project.featured && (
                <span className="featured-badge">
                  FEATURED
                </span>
              )}

            </div>


            {/* Project Content */}

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>


              {/* Technologies */}

              <div className="project-tech">

                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>


              {/* Buttons */}

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link github-link"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link live-link"
                >
                  Live Demo
                  <FiArrowUpRight />
                </a>

              </div>

            </div>

          </motion.article>
        ))}

      </div>

    </section>
  );
}

export default Projects;