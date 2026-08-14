import { SiPycqa } from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Programming",
      skills: ["Python"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ];
  return(
    <section id="skills" className="skills-section">
        <div className="section-title">
            <p>What I work with</p>
            <h2>My <span>Skills</span></h2>
        </div>
        <div className="skills-container">
            {skillGroups.map((group, index)=>(
                <div className="skill-card" key={index}>
                    <h3>{group.title}</h3>
                    <div className="skill-list">
                        {group.skills.map((skill)=>(
                            <span key={skill} className="skill-item">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
export default Skills;