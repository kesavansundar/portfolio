import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_dmawmnm",
        "template_fesm69p",
        form.current,
        {
          publicKey: "DDO2TGLo8D4G9v7DP",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! 🎉");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      {/* Section Heading */}
      <motion.div
        className="section-title contact-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p>GET IN TOUCH</p>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <div className="title-line"></div>
      </motion.div>

      {/* Main Contact Card */}
      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}
        <div className="contact-left">

          <span className="contact-badge">
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <h3>
            Let's build something
            <span> amazing together.</span>
          </h3>

          <p className="contact-description">
            Have a project idea, collaboration opportunity, or just
            want to say hello? I'd love to hear from you. Send me a
            message and I'll get back to you as soon as possible.
          </p>

          {/* Contact Details */}

          <div className="contact-details">

            <a
              href="mailto:kesavansundar06@gmail.com"
              className="contact-detail"
            >
              <div className="detail-icon">
                <FiMail />
              </div>

              <div>
                <span>Email</span>
                <strong>kesavansundar06@gmail.com</strong>
              </div>

              <FiArrowUpRight className="detail-arrow" />
            </a>

            <div className="contact-detail">
              <div className="detail-icon">
                <FiMapPin />
              </div>

              <div>
                <span>Location</span>
                <strong>Tamil Nadu, India</strong>
              </div>
            </div>

          </div>

          {/* Social Links */}

          <div className="contact-social-area">

            <p>Find me on</p>

            <div className="contact-socials">

              <a
                href="https://github.com/kesavansundar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kesavan-sundarapandiyan-538887415/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE - FORM */}

        <div className="contact-right">

          <div className="form-header">
            <span>01</span>

            <div>
              <h4>Send me a message</h4>
              <p>
                I'll get back to you shortly.
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            {/* Name */}

            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
              />

            </div>

            {/* Email */}

            <div className="form-group">

              <label htmlFor="email">
                Your Email
              </label>

              <input
                id="email"
                type="email"
                name="from_email"
                placeholder="Enter your email"
                required
              />

            </div>

            {/* Message */}

            <div className="form-group">

              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="contact-submit"
            >
              <span>
                Send Message
              </span>

              <FiSend />
            </button>

            {/* Status */}

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;