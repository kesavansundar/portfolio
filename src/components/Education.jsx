import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      year: "2024 - 2026",
      degree: "M.Sc. Computer Science",
      institution: "Bishop Heber College",
      location: "Trichy, Tamil Nadu, India",
      description:
        "Focused on computer science concepts, web development, data analytics, machine learning and modern software technologies.",
      current: true,
    },

    {
      year: "2021 - 2024",
      degree: "Bachelor's Degree",
      institution: "Bishop Heber College",
      location: "Trichy, Tamil Nadu, India",
      description:
        "Built a strong foundation in programming, databases, software development and computer science fundamentals.",
      current: false,
    },

    {
      year: "2019 - 2021",
      degree: "Higher Secondary Education",
      institution: "Kongunadu Matriculation Higher Secondary School",
      location: "Namakkal, Tamil Nadu, India",
      description:
        "Completed higher secondary education with a focus on computer science and related subjects.",
      current: false,
    },
  ];

  return (
    <section id="education" className="education-section">

      {/* Heading */}

      <motion.div
        className="section-title education-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p>MY ACADEMIC JOURNEY</p>

        <h2>
          <span>Education</span> & Learning
        </h2>

        <div className="title-line"></div>
      </motion.div>


      {/* Timeline */}

      <div className="education-timeline">

        {education.map((item, index) => (
          <motion.div
            className="education-item"
            key={item.year}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            {/* Timeline Dot */}

            <div className="timeline-dot">
              <FiBookOpen />
            </div>


            {/* Card */}

            <div className="education-card">

              <div className="education-card-top">

                <span className="education-year">
                  <FiCalendar />
                  {item.year}
                </span>

                {item.current && (
                  <span className="current-badge">
                    CURRENT
                  </span>
                )}

              </div>


              <div className="education-icon">
                <FiAward />
              </div>


              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>


              <div className="education-location">
                <FiMapPin />
                <span>{item.location}</span>
              </div>


              <p>
                {item.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>


      {/* Bottom Message */}

      <motion.div
        className="education-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FiBookOpen />

        <p>
          Learning today, building tomorrow.
        </p>
      </motion.div>

    </section>
  );
}

export default Education;