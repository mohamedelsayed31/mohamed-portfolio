import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMapPin,
  FiMonitor,
  FiBriefcase,
} from "react-icons/fi";

import Reveal from "./Reveal";

const experiences = [
  {
    date: "Jul 2026 — Aug 2026",
    company: "Information Technology Institute",
    short: "ITI",
    logo: "/images/companies/iti.jpg",

    role: "Summer Training — Web Development using .NET",

    location: "Remote",
    mode: "Remote",

    description:
      "Gained hands-on experience developing web applications using C#, ASP.NET Core MVC, Entity Framework Core, SQL Server and Razor. Worked with CRUD operations, database integration, validation, authentication, RESTful APIs and MVC architecture.",

    skills: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      "Razor",
      "REST APIs",
    ],

    companyUrl: "https://iti.gov.eg/",
    companyLinkLabel: "Visit ITI",

    featured: true,
  },

  {
    date: "Aug 2026",
    company: "Western Desert Operating Petroleum Co.",
    short: "WEPCO",
    logo: "/images/companies/wepco.jpg",

    role: "Software Engineering & IT",

    location: "Alexandria, Egypt",
    mode: "On-site",

    description:
      "Gained practical exposure to Software Engineering and IT within the Oil & Gas industry. Learned how .NET technologies support internal enterprise applications and explored SAP integration across business processes. Also gained exposure to databases, infrastructure and WEPCO's Data Center operations.",

    skills: [
      ".NET",
      "SAP",
      "Enterprise Apps",
      "Databases",
      "Data Center",
    ],

    companyUrl: "https://www.wepco-eg.com/",
    companyLinkLabel: "Visit WEPCO",

    featured: true,
  },

  {
    date: "Aug 2026",
    company: "El Hamra Oil Company",
    short: "EL HAMRA OIL",
    logo: "/images/companies/elhamra.png",

    role: "Information & Communication Technology",

    location: "Alexandria, Egypt",
    mode: "On-site",

    description:
      "Acquired practical knowledge of enterprise IT infrastructure and network environments within the ICT Division. Gained exposure to servers, data centers, network racks, Cisco switches, Ethernet and fiber-optic connections, cable management, IT support, maintenance and troubleshooting.",

    skills: [
      "IT Infrastructure",
      "Cisco",
      "Networking",
      "Data Center",
      "IT Support",
    ],

    companyUrl: "https://www.eho.com.eg/",
    companyLinkLabel: "Visit El Hamra",
  },

  {
    date: "Jul 2026",
    company: "Suez Oil Processing Company",
    short: "SOPC",
    logo: "/images/companies/sopc.png",

    role: "Information Technology & Systems",

    location: "Suez, Egypt",
    mode: "Hybrid",

    description:
      "Gained exposure to petroleum operations and Occupational Health & Safety. Developed knowledge of IT infrastructure, networking, cloud services, cybersecurity and enterprise systems, alongside SQL, data processing, Oracle APEX, web development, SAP/ERP, Active Directory and Exchange.",

    skills: [
      "Networking",
      "Cloud",
      "Cybersecurity",
      "SQL",
      "Oracle APEX",
      "SAP",
      "Active Directory",
    ],

    companyUrl: "https://www.linkedin.com/company/sopco/",
    companyLinkLabel: "Company Profile",
  },

  {
    date: "Jun 2025 — Aug 2025",
    company: "Information Technology Institute",
    short: "ITI",
    logo: "/images/companies/iti.jpg",

    role: "Full Stack Web Development — PHP & Laravel",

    location: "Remote",
    mode: "Remote",

    description:
      "Completed Full Stack Web Development training with hands-on experience in Laravel, PHP, MySQL, AJAX and modern front-end technologies. Developed web applications including student enrollment, profile management and registration/login systems covering authentication, validation and database management.",

    skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "AJAX",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    companyUrl: "https://iti.gov.eg/",
    companyLinkLabel: "Visit ITI",
  },

  {
    date: "Jul 2025",
    company: "Commercial International Bank",
    short: "CIB",
    logo: "/images/companies/cib.jpg",

    role: "Summer Intern — Green Leap Program",

    location: "Remote",
    mode: "Remote",

    description:
      "Completed CIB Summer Program 'The Green Leap', gaining exposure to sustainability, ESG principles, green initiatives and the banking and financial services industry.",

    skills: [
      "Banking",
      "Financial Services",
      "ESG",
      "Sustainability",
      "Green Initiatives",
    ],

    companyUrl: "https://www.cibeg.com/",
    companyLinkLabel: "Visit CIB",
  },

  {
    date: "Jun 2024 — Jul 2024",
    company: "El Hamra Oil Company",
    short: "EL HAMRA OIL",
    logo: "/images/companies/elhamra.png",

    role: "Information & Communication Technology",

    location: "Alexandria, Egypt",
    mode: "On-site",

    description:
      "Completed summer training within the ICT Division, gaining practical experience in IT support, hardware and software troubleshooting, networking fundamentals, system maintenance and technical problem-solving. The training also provided exposure to ICT operations within the Oil & Gas industry.",

    skills: [
      "IT Support",
      "Hardware",
      "Troubleshooting",
      "Networking",
      "System Maintenance",
    ],

    companyUrl: "https://www.eho.com.eg/",
    companyLinkLabel: "Visit El Hamra",
  },
];

function Experience() {
  return (
    <section
      className="experience-v3"
      id="experience"
    >
      <div className="container">

        {/* =========================
            HEADING
        ========================= */}

        <Reveal>
          <div className="experience-v3-heading">
            <span>MY JOURNEY</span>

            <h2>
              Experience<span>.</span>
            </h2>

            <p>
              Professional experience across software development,
              enterprise systems, networking, banking and Oil & Gas
              technology.
            </p>
          </div>
        </Reveal>


        {/* =========================
            JOURNEY STATS
        ========================= */}

        <Reveal>
          <div className="experience-stats-v3">

            <div>
              <strong>07</strong>
              <span>Training Experiences</span>
            </div>

            <div>
              <strong>05</strong>
              <span>Organizations</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Industries</span>
            </div>

            <div>
              <strong>2024—26</strong>
              <span>Professional Journey</span>
            </div>

          </div>
        </Reveal>


        {/* =========================
            EXPERIENCE CARDS
        ========================= */}

        <div className="experience-grid-v3">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.date}`}
              delay={(index % 3) * 0.06}
            >
              <motion.article
                className={`experience-card-v3 ${
                  experience.featured
                    ? "experience-featured"
                    : ""
                }`}
                whileHover={{
                  y: -7,
                }}
                transition={{
                  duration: 0.25,
                }}
              >

                {/* =====================
                    COMPANY HEADER
                ===================== */}

                <div className="experience-card-head">

                  <motion.a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="experience-logo-v3"
                    whileHover={{
                      scale: 1.06,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    title={`Visit ${experience.company}`}
                  >
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      loading="lazy"
                    />
                  </motion.a>


                  <div className="experience-company">

                    <span>
                      {experience.date}
                    </span>

                    <h3>
                      {experience.short}
                    </h3>

                  </div>

                </div>


                {/* =====================
                    LOCATION / MODE
                ===================== */}

                <div className="experience-meta">

                  <span>
                    <FiMapPin />
                    {experience.location}
                  </span>

                  <span>
                    <FiMonitor />
                    {experience.mode}
                  </span>

                </div>


                {/* =====================
                    ROLE
                ===================== */}

                <div className="experience-role-v3">

                  <FiBriefcase />

                  <h4>
                    {experience.role}
                  </h4>

                </div>


                {/* =====================
                    DESCRIPTION
                ===================== */}

                <p className="experience-description-v3">
                  {experience.description}
                </p>


                {/* =====================
                    SKILLS
                ===================== */}

                <div className="experience-skills-v3">

                  {experience.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>


                {/* =====================
                    FOOTER
                ===================== */}

                <div className="experience-footer-v3">

                  <span>
                    {experience.company}
                  </span>

                  <motion.a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      x: 3,
                    }}
                  >
                    {experience.companyLinkLabel}

                    <FiArrowUpRight />
                  </motion.a>

                </div>

              </motion.article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;