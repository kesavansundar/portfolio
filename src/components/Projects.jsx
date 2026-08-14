function Projects() {
  const projects = [
    {
      title: "Learning Management System",
      description:
        "A web-based learning platform where students can access courses, practice questions, complete tasks and track their learning progress.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Restaurant Management System",
      description:
        "A full-stack restaurant application with menu management, CRUD operations and database integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Student Management System",
      description:
        "A student management application for managing student information with a simple and responsive user interface.",
      technologies: ["React", "Node.js", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "An interactive dashboard designed to visualize data, identify trends and generate meaningful insights.",
      technologies: ["Python", "Power BI", "Data Analytics"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="section-title">
        <p>What I've Built</p>
        <h2>My <span>Projects</span></h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;