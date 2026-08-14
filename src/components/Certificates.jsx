// import certificate1 from "../assets/certificates/certificate1.jpg";
// import certificate2 from "../assets/certificates/certificate2.jpg";
// import certificate3 from "../assets/certificates/certificate3.jpg";

function Certificates() {
  const certificates = [
    {
      title: "React Development",
      issuer: "Certificate Provider",
      date: "2026",
    //   image: certificate1,
    },
    {
      title: "Python Programming",
      issuer: "Certificate Provider",
      date: "2026",
    //   image: certificate2,
    },
    {
      title: "Data Analytics",
      issuer: "Certificate Provider",
      date: "2026",
    //   image: certificate3,
    },
  ];

  return (
    <section id="certificates" className="certificates-section">

      <div className="section-title">
        <p>My Achievements</p>
        <h2>Certificates</h2>
      </div>

      <div className="certificates-container">

        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>

            <div className="certificate-image">
              {/* <img
                src={certificate.image}
                alt={certificate.title}
              /> */}
            </div>

            <div className="certificate-content">

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <span>{certificate.date}</span>

              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Certificates;