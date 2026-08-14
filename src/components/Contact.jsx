import { FiMail, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">

      <div className="section-title">
        <p>Let's Connect</p>
        <h2>
          Contact <span>Me</span>
        </h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's work together</h3>

          <p>
            Have a project idea, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <FiMail />
            </div>

            <div>
              <h4>Email</h4>
              <a href="mailto:yourmail@gmail.com">
                yourmail@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FiMapPin />
            </div>

            <div>
              <h4>Location</h4>
              <p>Tamil Nadu, India</p>
            </div>
          </div>

          <div className="contact-socials">

            <a
              href="https://github.com/kesavansundar"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kesavan-sundarapandiyan-538887415/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>

          </div>

        </div>

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit">
            Send Message
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;