import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    category: "Automotive Management Platform",
    title: "AutoStock",
    description:
      "A full-stack automotive inventory management system built to manage vehicles, stock, suppliers, sales, reports and business analytics through one unified platform.",
    image: "/images/autostock-showcase.png",
    tech: [
      "ASP.NET Core",
      "React",
      "TypeScript",
      "SQL Server",
      "EF Core",
    ],
    github: "https://github.com/mohamedelsayed31/AutoStock",
    accent: "orange",
  },

  {
    number: "02",
    category: "English Learning Platform",
    title: "ElmasrawyVerse",
    description:
      "A modern full-stack English learning platform featuring structured courses, assessments, progress tracking, student management and certificates.",
    image: "/images/elmasrawyverse.png",
    tech: ["Laravel", "PHP", "React", "MySQL"],
    github:
      "https://github.com/mohamedelsayed31/elmasrawyverse-english-learning-platform",
    accent: "red",
  },

  {
    number: "03",
    category: "Management Platform",
    title: "Smart Printing",
    description:
      "Full-stack print shop management platform for jobs, inventory, revenue, attendance and material usage.",
    image: "/images/printing.jpg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
  },

  {
    number: "04",
    category: "IoT Application",
    title: "Fire Detection",
    description:
      "IoT-based fire detection system with environmental sensors, real-time monitoring and automated alerts.",
    image: "/images/fire-detection.jpg",
    tech: ["Arduino", "Flutter", "IoT", "Sensors"],
    github: "#",
  },
];

function ProjectActions({ project }) {
  if (project.github === "#") return null;

  return (
    <div className="project-actions">
      <motion.a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-github"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        <FaGithub />
        GitHub
        <FiArrowUpRight />
      </motion.a>
    </div>
  );
}

function Projects() {
  const featured = projects.slice(0, 2);
  const secondary = projects.slice(2);

  return (
    <section className="projects-redesign" id="projects">
      <div className="container">
        <Reveal>
          <div className="projects-redesign-heading">
            <span>SELECTED WORK</span>

            <h2>
              Projects that turn
              <strong> ideas into products.</strong>
            </h2>

            <p>
              A selection of full-stack, software engineering
              and connected-system projects built around
              practical problems and real user experiences.
            </p>
          </div>
        </Reveal>

        {/* FEATURED PROJECTS */}

        <div className="featured-projects">
          {featured.map((project, index) => (
            <Reveal
              key={project.number}
              delay={index * 0.08}
            >
              <motion.article
                className={`featured-project featured-${project.accent}`}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
              >
                <div className="featured-project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} platform showcase`}
                    loading="lazy"
                  />

                  <div className="featured-project-number">
                    {project.number}
                  </div>
                </div>

                <div className="featured-project-body">
                  <div>
                    <span className="featured-project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="featured-project-tech">
                      {project.tech.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ProjectActions project={project} />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* SECONDARY PROJECTS */}

        <div className="secondary-projects">
          {secondary.map((project, index) => (
            <Reveal
              key={project.number}
              delay={index * 0.08}
            >
              <motion.article
                className="secondary-project-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="secondary-project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget
                        .closest(".secondary-project-image")
                        ?.classList.add("image-error");
                    }}
                  />

                  <div className="secondary-placeholder">
                    <span>{project.number}</span>
                    <strong>{project.title}</strong>
                  </div>
                </div>

                <div className="secondary-project-content">
                  <span>{project.category}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="secondary-project-tech">
                    {project.tech.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <ProjectActions project={project} />
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