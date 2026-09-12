import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiCpu,
} from "react-icons/fi";

import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    icon: <FiCode />,
    title: "Backend Development",
    description:
      "Designing secure and scalable backend systems, REST APIs, authentication flows, business logic and database integrations.",
    technologies: [
      "ASP.NET Core",
      "EF Core",
      "C#",
      "Node.js",
      "Laravel",
      "SQL Server",
    ],
  },

  {
    number: "02",
    icon: <FiLayers />,
    title: "Full-Stack Development",
    description:
      "Building complete web applications by combining modern user interfaces with reliable backend services and databases.",
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "MongoDB",
      "MySQL",
    ],
  },

  {
    number: "03",
    icon: <FiCpu />,
    title: "Software Engineering",
    description:
      "Creating maintainable software using clean architecture, OOP, MVC, design principles, debugging and version control.",
    technologies: [
      "Clean Architecture",
      "OOP",
      "MVC",
      "Git",
      "Design Patterns",
    ],
  },
];

function Services() {
  return (
    <section
      className="services-premium-section"
      id="services"
    >
      <div className="container">

        <Reveal>
          <div className="services-premium-heading">
            <span>WHAT I DO</span>

            <h2>
              Services &
              <strong> Expertise.</strong>
            </h2>

            <p>
              Software development focused on scalable
              architecture, maintainable code and
              reliable digital experiences.
            </p>
          </div>
        </Reveal>


        <div className="services-premium-grid">

          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={index * 0.08}
            >
              <motion.article
                className="service-premium-card"
                whileHover={{
                  y: -8,
                }}
              >

                <span className="service-background-number">
                  {service.number}
                </span>

                <div className="service-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <motion.div
                    className="service-icon-v2"
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                  >
                    {service.icon}
                  </motion.div>

                </div>


                <div className="service-main-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>


                <div className="service-tech-list">

                  {service.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>


                <div className="service-card-bottom">

                  <span>
                    Development Capability
                  </span>

                  <motion.div
                    whileHover={{
                      x: 4,
                      rotate: 45,
                    }}
                  >
                    <FiArrowUpRight />
                  </motion.div>

                </div>

              </motion.article>
            </Reveal>
          ))}

        </div>


        <Reveal>
          <div className="service-bottom-banner">

            <div>
              <span>
                NEED A COMPLETE SOLUTION?
              </span>

              <h3>
                From idea to working software.
              </h3>

              <p>
                Frontend, backend, APIs and databases
                combined into maintainable full-stack
                applications.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{
                x: 5,
              }}
            >
              Let's Talk

              <FiArrowUpRight />
            </motion.a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Services;