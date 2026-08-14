function Education() {
  const education = [
    {
      degree: "M.Sc. Computer Science",
      college: "Bishop Herber College, Trichy",
      year: "2025 - 2027",
      description:
        "Currently pursuing postgraduate studies in Computer Science with a focus on software development, web technologies and data analytics."
    },
    {
      degree: "B.Sc. Computer Science",
      college: "Bishop Herber College, Trichy",
      year: "2022 - 2025",
      description:
        "Completed undergraduate studies in Computer Science with a strong foundation in programming, databases and application development."
    }
  ];

  return (
    <section id="education" className="education-section">

      <div className="section-title">
        <p>My Academic Journey</p>
        <h2>Education</h2>
      </div>

      <div className="education-container">

        {education.map((item, index) => (
          <div className="education-card" key={index}>

            <div className="education-year">
              {item.year}
            </div>

            <div className="education-content">

              <h3>{item.degree}</h3>

              <h4>{item.college}</h4>

              <p>{item.description}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Education;