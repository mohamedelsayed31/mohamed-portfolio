import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiAward,
  FiFileText,
  FiShield,
} from "react-icons/fi";

import Reveal from "./Reveal";


/* =====================================================
   VERIFIED DIGITAL CREDENTIALS
===================================================== */

const badges = [
  {
    title: "Introduction to Cybersecurity",

    issuer: "Cisco Networking Academy",

    image:
      "/images/certifications/cisco-introduction-cybersecurity.png",

    credential:
      "https://www.credly.com/badges/8587cd2f-c8e7-476c-a9bb-d31320d1e93d/linked_in_profile",

    accent: "cisco",

    label: "VERIFIED CREDENTIAL",
  },

  {
    title: "Responsible Innovation and Trustworthy AI",

    issuer: "SAS",

    image:
      "/images/certifications/sas-data-science-learn.png",

    credential:
      "https://www.credly.com/badges/b6f92f4e-e6cf-4b2c-a6e9-4fd0471775e0/linked_in_profile",

    accent: "sas",

    label: "VERIFIED CREDENTIAL",
  },
];


/* =====================================================
   CERTIFICATES & TRAINING
===================================================== */

const certificates = [
  {
    title:
      "Full Stack Web Development using PHP & Laravel",

    issuer:
      "Telecom Egypt (WE)",

    category:
      "FULL-STACK DEVELOPMENT",

    date: "",

    brand: "WE",

    image: null,

    credential: null,

    certificate: null,

    accent: "we",
  },

  {
    title:
      "Prompt Engineering for AI Systems",

    issuer:
      "Dubai Future Foundation",

    category:
      "ARTIFICIAL INTELLIGENCE",

    date: "",

    brand: "DFF",

    image: null,

    credential: null,

    certificate: null,

    accent: "dff",
  },

  {
    title:
      "Web Development Fundamentals",

    issuer:
      "Sprints",

    category:
      "WEB DEVELOPMENT",

    date: "",

    brand: "S",

    image:
      "/images/certifications/sprints-web-development.png",

    credential: null,

    certificate:
      "/certificates/sprints-web-development.pdf",

    accent: "sprints",
  },

  {
    title:
      "Programming Fundamentals Diploma",

    issuer:
      "Route IT Training Center",

    category:
      "PROGRAMMING",

    date:
      "Oct 2024",

    brand:
      "R",

    image:
      "/images/certifications/route-programming-fundamentals.png",

    credential: null,

    certificate:
      "/certificates/route-programming-fundamentals.pdf",

    accent:
      "route",
  },

  {
    title:
      "Introduction to MongoDB",

    issuer:
      "MaharaTech / ITI",

    category:
      "DATABASE",

    date:
      "Dec 2024",

    brand:
      "M",

    image:
      "/images/certifications/mongodb-introduction.png",

    credential: null,

    certificate:
      "/certificates/mongodb-introduction.pdf",

    accent:
      "mongodb",
  },
];


function Certifications() {
  return (
    <section
      className="certifications-premium-section"
      id="certifications"
    >
      <div className="container">

        {/* =================================================
            MAIN HEADING
        ================================================= */}

        <Reveal>
          <div className="cert-premium-heading">

            <span>
              CONTINUOUS LEARNING
            </span>

            <h2>
              Credentials &
              <strong>
                {" "}Certifications.
              </strong>
            </h2>

            <p>
              Professional certifications, verified digital
              credentials and technical training across software
              development, AI, cybersecurity and databases.
            </p>

          </div>
        </Reveal>


        {/* =================================================
            VERIFIED CREDENTIALS HEADING
        ================================================= */}

        <Reveal>
          <div className="credential-section-heading">

            <div>
              <span>
                VERIFIED CREDENTIALS
              </span>

              <h3>
                Industry-recognized digital badges.
              </h3>
            </div>

            <p>
              Credentials that can be independently verified
              through their issuing platforms.
            </p>

          </div>
        </Reveal>


        {/* =================================================
            DIGITAL BADGES
        ================================================= */}

        <div className="badge-showcase-grid">

          {badges.map((badge, index) => (

            <Reveal
              key={badge.title}
              delay={index * 0.08}
            >

              <motion.article
                className={`credential-badge-card ${badge.accent}`}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.3,
                }}
              >

                {/* BADGE */}

                <div className="badge-visual">

                  <motion.img
                    src={badge.image}
                    alt={`${badge.title} badge`}
                    loading="lazy"

                    whileHover={{
                      scale: 1.035,
                    }}

                    transition={{
                      duration: 0.35,
                    }}
                  />

                </div>


                {/* INFORMATION */}

                <div className="badge-information">

                  <span className="badge-label">

                    <FiShield />

                    {badge.label}

                  </span>


                  <h3>
                    {badge.title}
                  </h3>


                  <p>
                    Issued by {badge.issuer}
                  </p>


                  {badge.credential && (

                    <motion.a
                      href={badge.credential}
                      target="_blank"
                      rel="noreferrer"
                      className="verify-button"

                      whileHover={{
                        x: 4,
                      }}
                    >

                      Verify Credential

                      <FiArrowUpRight />

                    </motion.a>

                  )}

                </div>

              </motion.article>

            </Reveal>

          ))}

        </div>


        {/* =================================================
            CERTIFICATE HEADING
        ================================================= */}

        <Reveal>
          <div className="certificate-subheading">

            <div>

              <span>
                CERTIFICATES & TRAINING
              </span>

              <h3>
                Learning beyond the classroom.
              </h3>

            </div>

            <p>
              Courses and professional training supporting
              my software engineering journey.
            </p>

          </div>
        </Reveal>


        {/* =================================================
            CERTIFICATES
        ================================================= */}

        <div className="certificates-gallery">

          {certificates.map((cert, index) => (

            <Reveal
              key={cert.title}
              delay={(index % 3) * 0.07}
            >

              <motion.article
                className={`certificate-gallery-card ${cert.accent}`}

                whileHover={{
                  y: -6,
                }}

                transition={{
                  duration: 0.28,
                }}
              >

                {/* PREVIEW */}

                <div className="certificate-preview">

                  {cert.image ? (

                    <>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                      />

                      <div className="certificate-preview-overlay">

                        <FiFileText />

                        <span>
                          Certificate
                        </span>

                      </div>
                    </>

                  ) : (

                    <div className="certificate-brand-preview">

                      <div className="certificate-brand-mark">
                        {cert.brand}
                      </div>

                      <span>
                        {cert.category}
                      </span>

                    </div>

                  )}

                </div>


                {/* CONTENT */}

                <div className="certificate-content">

                  <div className="certificate-card-meta">

                    <span>
                      {cert.category}
                    </span>

                    {cert.date && (
                      <span>
                        {cert.date}
                      </span>
                    )}

                  </div>


                  <h3>
                    {cert.title}
                  </h3>


                  <p>
                    {cert.issuer}
                  </p>


                  {(cert.credential ||
                    cert.certificate) && (

                    <div className="certificate-actions">

                      {cert.credential && (

                        <a
                          href={cert.credential}
                          target="_blank"
                          rel="noreferrer"
                        >

                          <FiAward />

                          Verify Credential

                        </a>

                      )}


                      {cert.certificate && (

                        <a
                          href={cert.certificate}
                          target="_blank"
                          rel="noreferrer"
                        >

                          <FiFileText />

                          View Certificate

                        </a>

                      )}

                    </div>

                  )}

                </div>

              </motion.article>

            </Reveal>

          ))}

        </div>


        {/* =================================================
            SUMMARY
        ================================================= */}

        <Reveal>

          <div className="certification-summary">

            <div>

              <strong>
                7+
              </strong>

              <span>
                Technical Credentials
              </span>

            </div>


            <div>

              <strong>
                AI
              </strong>

              <span>
                Responsible & Generative AI
              </span>

            </div>


            <div>

              <strong>
                WEB
              </strong>

              <span>
                Full-Stack Development
              </span>

            </div>


            <div>

              <strong>
                CS
              </strong>

              <span>
                Cybersecurity & Databases
              </span>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}


export default Certifications;