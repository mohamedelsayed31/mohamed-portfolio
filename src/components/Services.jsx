import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

const services = [
  {
    number: "01",

    title: "Backend Development",

    image: "/images/services/backend-development.png",

    imagePosition: "center 38%",

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

    title: "Full-Stack Development",

    image: "/images/services/fullstack-development.png",

    imagePosition: "center 35%",

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

    title: "Software Engineering",

    image: "/images/services/software-engineering.png",

    imagePosition: "center 40%",

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

        {/* Heading */}

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


        {/* Services */}

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
                transition={{
                  duration: 0.28,
                }}
              >

                {/* Image */}

                <div className="service-visual">
                  <motion.img
                    src={service.image}
                    alt={`${service.title} illustration`}
                    loading="lazy"

                    style={{
                      objectPosition:
                        service.imagePosition,
                    }}

                    whileHover={{
                      scale: 1.035,
                    }}

                    transition={{
                      duration: 0.45,
                    }}
                  />

                  <div className="service-visual-overlay" />

                  <span className="service-image-number">
                    {service.number}
                  </span>
                </div>


                {/* Content */}

                <div className="service-card-content">

                  <div className="service-main-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>


                  {/* Technologies */}

                  <div className="service-tech-list">
                    {service.technologies.slice(0, 5).map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>


                  {/* Footer */}

                  <div className="service-card-bottom">

                    <span>
                      Development Capability
                    </span>

                    <motion.div
                      className="service-arrow"
                      whileHover={{
                        x: 3,
                        y: -3,
                      }}
                    >
                      <FiArrowUpRight />
                    </motion.div>

                  </div>

                </div>

              </motion.article>
            </Reveal>
          ))}

        </div>


        {/* CTA */}

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