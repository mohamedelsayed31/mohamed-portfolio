import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import Reveal from "./Reveal";

function Contact() {
  return (
    <>
      <section
        className="new-contact-section"
        id="contact"
      >
        <div className="container">
          <Reveal>
            <div className="contact-header-new">
              <span>CONTACT</span>

              <h2>
                Let's create
                <strong>something great.</strong>
              </h2>

              <p>
                I'm open to Software Engineering
                opportunities, internships and
                collaborations.
              </p>
            </div>
          </Reveal>

          <div className="contact-layout-new">
            <Reveal>
              <motion.div
                className="contact-main-card"
                whileHover={{
                  y: -5,
                }}
              >
                <span className="contact-card-label">
                  START A CONVERSATION
                </span>

                <h3>
                  Have a project,
                  <br />
                  opportunity or idea?
                </h3>

                <p>
                  Feel free to reach out. I'm always
                  interested in discussing software,
                  technology and new opportunities.
                </p>

                <motion.a
                  href="mailto:me6877818@gmail.com"
                  className="contact-email-button"
                  whileHover={{
                    x: 5,
                  }}
                >
                  <FiMail />

                  <span>
                    me6877818@gmail.com
                  </span>

                  <FiArrowUpRight />
                </motion.a>

                <div className="contact-mini-info">
                  <div>
                    <FiPhone />

                    <span>
                      +20 155 262 4465
                    </span>
                  </div>

                  <div>
                    <FiMapPin />

                    <span>
                      Alexandria, Egypt
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            <div className="social-contact-column">
              <Reveal delay={0.08}>
                <motion.a
                  href="https://www.linkedin.com/in/mohamed-elsayed-444003298/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-contact-card linkedin-card"
                  whileHover={{
                    y: -7,
                    scale: 1.01,
                  }}
                >
                  <div className="social-contact-icon linkedin-icon">
                    <FaLinkedinIn />
                  </div>

                  <div>
                    <span>LINKEDIN</span>

                    <h3>
                      Let's connect
                    </h3>

                    <p>
                      View my professional profile,
                      experience and network.
                    </p>
                  </div>

                  <FiArrowUpRight className="social-arrow" />
                </motion.a>
              </Reveal>

              <Reveal delay={0.15}>
                <motion.a
                  href="https://github.com/mohamedelsayed31"
                  target="_blank"
                  rel="noreferrer"
                  className="social-contact-card github-card"
                  whileHover={{
                    y: -7,
                    scale: 1.01,
                  }}
                >
                  <div className="social-contact-icon github-icon">
                    <FaGithub />
                  </div>

                  <div>
                    <span>GITHUB</span>

                    <h3>
                      Explore my code
                    </h3>

                    <p>
                      Check my repositories,
                      projects and development work.
                    </p>
                  </div>

                  <FiArrowUpRight className="social-arrow" />
                </motion.a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <footer className="clean-footer">
        <div className="container">
          <div className="clean-footer-main">
            <div className="clean-footer-brand">
              <div className="clean-footer-logo">
                ME
              </div>

              <div>
                <strong>
                  Mohamed Elsayed
                </strong>

                <span>
                  Software Engineer &
                  Full-Stack Developer
                </span>
              </div>
            </div>

            <div className="clean-footer-nav">
              <a href="#home">
                Home
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#experience">
                Experience
              </a>

              <a href="#research">
                Research
              </a>
            </div>

            <div className="clean-footer-social">
              <a
                href="https://www.linkedin.com/in/mohamed-elsayed-444003298/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/mohamedelsayed31"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a href="mailto:me6877818@gmail.com">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="clean-footer-bottom">
            <span>
              © 2026 Mohamed Elsayed
            </span>

            <span>
              Designed & developed by Mohamed
            </span>

            <a href="#home">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;