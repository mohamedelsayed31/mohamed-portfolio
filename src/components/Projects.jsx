import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import Reveal from "./Reveal";

const projects = [
  {
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

    github:
      "https://github.com/mohamedelsayed31/AutoStock",

    accent: "orange",
  },

  {
    category: "English Learning Platform",

    title: "ElmasrawyVerse",

    description:
      "A modern full-stack English learning platform featuring structured courses, assessments, progress tracking, student management and certificates.",

    image: "/images/elmasrawyverse.png",

    tech: [
      "Laravel",
      "PHP",
      "React",
      "MySQL",
    ],

    github:
      "https://github.com/mohamedelsayed31/elmasrawyverse-english-learning-platform",

    accent: "red",
  },

  {
    category: "Print Shop Management Platform",

    title: "Smart Printer System",

    description:
      "An Arabic-first full-stack print shop management platform featuring role-based access, employee attendance, print-job management, warehouse inventory, financial and administrative reporting, and AI-assisted paper-waste analysis.",

    image: "/images/smart-printer-showcase.png",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    github:
      "https://github.com/mohamedelsayed31/smart-printer-management-system",

    accent: "blue",
  },

  {
    category: "IoT Safety Monitoring System",

    title: "Smart Protection System",

    description:
      "An IoT-based fire and environmental safety monitoring system integrating Arduino sensors with a Flutter mobile application for real-time smoke, temperature and humidity monitoring, event history and automated safety alerts.",

    image: "/images/fire-detection-showcase.png",

    tech: [
      "Arduino",
      "Flutter",
      "IoT",
      "MQ-2",
      "DHT22",
      "HC-05",
    ],

    github:
      "https://github.com/mohamedelsayed31/GIS-Aware-WSN-Wildfire-Detection",

    accent: "cyan",
  },
];


/* =====================================================
   PROJECT ACTION BUTTONS
===================================================== */

function ProjectActions({ project }) {
  if (!project.github || project.github === "#") {
    return null;
  }

  return (
    <div className="project-actions">
      <motion.a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-github"
        whileHover={{
          y: -3,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <FaGithub />

        <span>
          GitHub
        </span>

        <FiArrowUpRight />
      </motion.a>
    </div>
  );
}


/* =====================================================
   PROJECTS
===================================================== */

function Projects() {
  return (
    <section
      className="projects-redesign"
      id="projects"
    >
      <div className="container">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <Reveal>
          <div className="projects-redesign-heading">

            <span>
              SELECTED WORK
            </span>

            <h2>
              Projects that turn
              <strong>
                {" "}ideas into products.
              </strong>
            </h2>

            <p>
              A selection of full-stack, software engineering
              and connected-system projects built around
              practical problems and real user experiences.
            </p>

          </div>
        </Reveal>


        {/* =========================
            ALL PROJECTS
        ========================= */}

        <div className="featured-projects">

          {projects.map((project, index) => (

            <Reveal
              key={project.title}
              delay={index * 0.07}
            >

              <motion.article
                className={`featured-project featured-${project.accent}`}
                whileHover={{
                  y: -7,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                {/* =====================
                    PROJECT IMAGE
                ===================== */}

                <div className="featured-project-media">

                  <img
                    src={project.image}
                    alt={`${project.title} platform showcase`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";

                      e.currentTarget
                        .closest(".featured-project-media")
                        ?.classList.add(
                          "featured-image-error"
                        );
                    }}
                  />


                  {/* FALLBACK */}

                  <div className="featured-project-placeholder">
                    <strong>
                      {project.title}
                    </strong>
                  </div>

                </div>


                {/* =====================
                    PROJECT CONTENT
                ===================== */}

                <div className="featured-project-body">

                  <div>

                    <span className="featured-project-category">
                      {project.category}
                    </span>


                    <h3>
                      {project.title}
                    </h3>


                    <p>
                      {project.description}
                    </p>


                    {/* TECHNOLOGIES */}

                    <div className="featured-project-tech">

                      {project.tech.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* GITHUB */}

                  <ProjectActions
                    project={project}
                  />

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