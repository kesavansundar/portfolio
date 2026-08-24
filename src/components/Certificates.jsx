import {
  FiAward,
  FiExternalLink,
  FiEye,
  FiCalendar,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Certificates() {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Certificate Issuing Organization",
      date: "2026",
      image: "/certificates/fullstack.png",
      link: "#",
    },
    {
      title: "React JS Development",
      issuer: "Certificate Issuing Organization",
      date: "2026",
      image: "/certificates/react.png",
      link: "#",
    },
    {
      title: "Data Analytics",
      issuer: "Certificate Issuing Organization",
      date: "2026",
      image: "/certificates/data-analytics.png",
      link: "#",
    },
    {
      title: "Machine Learning",
      issuer: "Certificate Issuing Organization",
      date: "2026",
      image: "/certificates/ml.png",
      link: "#",
    },
  ];

  return (
    <section id="certificates" className="certificates-section">

      {/* Section Heading */}

      <motion.div
        className="section-title certificates-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p>MY ACHIEVEMENTS</p>

        <h2>
          My <span>Certificates</span>
        </h2>

        <div className="title-line"></div>

        <p className="certificate-subtitle">
          Certifications and achievements that represent my continuous
          learning journey.
        </p>
      </motion.div>


      {/* Certificate Grid */}

      <div className="certificates-grid">

        {certificates.map((certificate, index) => (
          <motion.article
            className="certificate-card"
            key={certificate.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >

            {/* Certificate Preview */}

            <div className="certificate-preview">

              {/* <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
              /> */}

              {/* Hover Overlay */}

              <div className="certificate-overlay">

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-view-btn"
                >
                  <FiEye />
                  View Certificate
                </a>

              </div>

              {/* Certificate Number */}

              <span className="certificate-number">
                0{index + 1}
              </span>

            </div>


            {/* Certificate Details */}

            <div className="certificate-content">

              <div className="certificate-icon">
                <FiAward />
              </div>

              <div className="certificate-details">

                <span className="certificate-label">
                  CERTIFICATION
                </span>

                <h3>{certificate.title}</h3>

                <p>{certificate.issuer}</p>

                <div className="certificate-date">
                  <FiCalendar />
                  <span>{certificate.date}</span>
                </div>

              </div>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-arrow"
                aria-label="Open certificate"
              >
                <FiExternalLink />
              </a>

            </div>

          </motion.article>
        ))}

      </div>


      {/* Bottom */}

      <motion.div
        className="certificates-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FiAward />

        <p>
          Every certificate represents a step forward in my learning journey.
        </p>
      </motion.div>

    </section>
  );
}

export default Certificates;