import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    category: "Full-Stack Application",
    title: "AutoStock",
    description:
      "Automotive inventory management platform built for efficient stock, product and business operations.",
    image: "/images/autostock.png",
    tech:
      "ASP.NET Core · React · TypeScript · SQL Server · EF Core",
    github:
      "https://github.com/mohamedelsayed31/AutoStock",
  },
  {
    number: "02",
    category: "Management Platform",
    title: "Smart Printing",
    description:
      "Full-stack print shop management platform for jobs, inventory, revenue, attendance and material usage.",
    image: "/images/printing.jpg",
    tech: "React · Node.js · Express · MongoDB",
    github: "#",
  },
  {
    number: "03",
    category: "E-Learning Platform",
    title: "E-Learning System",
    description:
      "Learning platform with course management, enrollment, authentication and gamified rewards.",
    image: "/images/elearning.jpg",
    tech: "Laravel · PHP · MySQL · JavaScript",
    github: "#",
  },
  {
    number: "04",
    category: "IoT Application",
    title: "Fire Detection",
    description:
      "IoT-based fire detection system with environmental sensors, real-time monitoring and automated alerts.",
    image: "/images/fire-detection.jpg",
    tech: "Arduino · Flutter · IoT · Sensors",
    github: "#",
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <Reveal>
          <div className="section-heading centered">
            <span>SELECTED WORK</span>
            <h2>Recent Projects</h2>
            <p>
              A curated selection of projects combining software
              engineering, backend systems and modern interfaces.
            </p>
          </div>
        </Reveal>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <Reveal
              key={project.number}
              delay={index * 0.08}
            >
              <motion.article
                className="showcase-project"
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <div
                className="showcase-image"
                style={{
                    "--project-image": `url("${project.image}")`,
                }}
                >
                <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget
                        .closest(".showcase-image")
                        .classList.add("image-error");
                    }}
                />

                <div className="project-placeholder">
                    <span>{project.number}</span>
                    <strong>{project.title}</strong>
                </div>
                </div>

                <div className="showcase-info">
                  <div className="project-category">
                    {project.category}
                  </div>

                  <div className="project-title-row">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>

                    {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-open"
                        whileHover={{
                          rotate: 45,
                          scale: 1.1,
                        }}
                      >
                        ↗
                      </motion.a>
                    )}
                  </div>

                  <div className="project-technologies">
                    {project.tech}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;