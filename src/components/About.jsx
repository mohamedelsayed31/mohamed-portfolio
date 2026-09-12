import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  FiArrowUpRight,
  FiMapPin,
  FiBookOpen,
  FiCode,
  FiCalendar,
} from "react-icons/fi";

import Reveal from "./Reveal";

const focusAreas = [
  "Software Engineering",
  "Full-Stack Development",
  "Backend Development",
  "REST APIs",
  "Database Design",
];

const stats = [
  {
    value: "7+",
    label: "Experiences",
  },
  {
    value: "4+",
    label: "Projects",
  },
  {
    value: "2",
    label: "IEEE Papers",
  },
  {
    value: "2027",
    label: "Graduation",
  },
];

function About() {
  return (
    <section
      className="about-premium-section"
      id="about"
    >
      <div className="container">

        <Reveal>
          <div className="about-premium-heading">
            <span>WHO I AM</span>

            <h2>
              About
              <strong> Me.</strong>
            </h2>

            <p>
              Software Engineering student focused on
              building reliable, scalable and meaningful
              digital products.
            </p>
          </div>
        </Reveal>

        <div className="about-premium-layout">

          {/* LEFT PROFILE */}

          <Reveal>
            <motion.div
              className="about-profile-card-v2"
              whileHover={{
                y: -7,
              }}
            >
              <div className="about-photo-v2">

                <div className="about-photo-glow"></div>

                <img
                  src="/images/profile.jpeg"
                  alt="Mohamed Elsayed"
                />

                <div className="about-available">
                  <span></span>
                  Available for opportunities
                </div>

              </div>

              <div className="about-profile-content">
                <span className="about-profile-label">
                  SOFTWARE ENGINEER
                </span>

                <h3>
                  Mohamed Elsayed
                </h3>

                <p>
                  Full-Stack Developer
                </p>

                <div className="about-social-buttons">

                  <motion.a
                    href="https://www.linkedin.com/in/mohamed-elsayed-444003298/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -3,
                    }}
                    className="about-social linkedin-about"
                  >
                    <FaLinkedinIn />

                    LinkedIn

                    <FiArrowUpRight />
                  </motion.a>

                  <motion.a
                    href="https://github.com/mohamedelsayed31"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -3,
                    }}
                    className="about-social github-about"
                  >
                    <FaGithub />

                    GitHub

                    <FiArrowUpRight />
                  </motion.a>

                </div>
              </div>
            </motion.div>
          </Reveal>


          {/* RIGHT SIDE */}

          <div className="about-right-v2">

            <Reveal delay={0.05}>
              <div className="about-intro-card">

                <span className="about-small-label">
                  A LITTLE ABOUT ME
                </span>

                <h3>
                  Hello, I'm Mohamed.
                </h3>

                <p>
                  I'm a Computer Science student specializing
                  in Software Engineering with hands-on
                  experience building full-stack applications
                  using ASP.NET Core, React, Laravel, PHP,
                  Node.js and modern database technologies.
                </p>

                <p>
                  I enjoy turning real-world requirements into
                  clean, maintainable software and continuously
                  expanding my experience through projects,
                  internships and academic research.
                </p>

                <div className="about-focus-tags">
                  {focusAreas.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>


            {/* STATS */}

            <div className="about-stats-v2">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={index * 0.05}
                >
                  <motion.div
                    className="about-stat-card"
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <strong>
                      {stat.value}
                    </strong>

                    <span>
                      {stat.label}
                    </span>
                  </motion.div>
                </Reveal>
              ))}
            </div>


            {/* INFO */}

            <Reveal>
              <div className="about-info-panel">

                <div className="about-info-row">
                  <div className="about-info-icon">
                    <FiBookOpen />
                  </div>

                  <div>
                    <span>Education</span>

                    <strong>
                      B.S. Computer Science
                    </strong>

                    <p>
                      Software Engineering — MSA University
                    </p>
                  </div>
                </div>


                <div className="about-info-row">
                  <div className="about-info-icon">
                    <FiMapPin />
                  </div>

                  <div>
                    <span>Location</span>

                    <strong>
                      Alexandria, Egypt
                    </strong>

                    <p>
                      Open to remote & on-site opportunities
                    </p>
                  </div>
                </div>


                <div className="about-info-row">
                  <div className="about-info-icon">
                    <FiCalendar />
                  </div>

                  <div>
                    <span>Graduation</span>

                    <strong>
                      July 2027
                    </strong>

                    <p>
                      Software Engineering Track
                    </p>
                  </div>
                </div>


                <div className="about-info-row">
                  <div className="about-info-icon">
                    <FiCode />
                  </div>

                  <div>
                    <span>Current Focus</span>

                    <strong>
                      Full-Stack Development
                    </strong>

                    <p>
                      .NET · React · APIs · Databases
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;