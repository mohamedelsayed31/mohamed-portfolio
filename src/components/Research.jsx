import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";

import Reveal from "./Reveal";


const papers = [
  {
    title:
      "A GIS-Aware Deployment-Optimized Wireless Sensor Network for Early Forest Fire Detection",

    category:
      "Wireless Sensor Networks · GIS · Wildfire Detection",

    conference:
      "IEEE IMSA 2026",

    status:
      "Accepted & Presented",

    image:
      "/images/research/gis-aware-wsn-paper-preview.png",

    pdf:
      "/papers/gis-aware-wsn-wildfire-paper.pdf",

    description:
      "A GIS-aware wireless sensor network framework combining terrain-constrained deployment, adaptive pruning and spatial optimization for scalable early forest fire detection.",

    technologies: [
      "Wireless Sensor Networks",
      "GIS",
      "IoT",
      "Arduino",
      "Flutter",
      "Optimization",
    ],

    metrics: [
      {
        value: "95.11%",
        label: "Coverage",
      },
      {
        value: "23.7%",
        label: "Fewer Nodes",
      },
      {
        value: "0.82 s",
        label: "Response Latency",
      },
    ],

    accent: "wildfire",
  },

  {
    title:
      "Efficient Human Activity Recognition Using Magnitude-Enhanced Statistical Features and Extra Trees Ensemble",

    category:
      "Machine Learning · Human Activity Recognition",

    conference:
      "IEEE IMSA 2026",

    status:
      "Accepted & Presented",

    image:
      "/images/research/har-extra-trees-paper-preview.png",

    pdf:
      "/papers/har-extra-trees-paper.pdf",

    description:
      "A lightweight and interpretable Human Activity Recognition framework using magnitude-enhanced statistical features and an Extra Trees ensemble classifier.",

    technologies: [
      "Machine Learning",
      "Extra Trees",
      "WISDM",
      "UCI HAR",
      "SHAP",
      "Python",
    ],

    metrics: [
      {
        value: "97.57%",
        label: "WISDM Accuracy",
      },
      {
        value: "0.34 MB",
        label: "Model Size",
      },
      {
        value: "SHAP",
        label: "Explainability",
      },
    ],

    accent: "har",
  },
];


function Research() {
  return (
    <section
      className="research-premium-section"
      id="research"
    >
      <div className="container">

        {/* ============================================
            SECTION HEADING
        ============================================ */}

        <Reveal>
          <div className="research-heading-premium">

            <span className="research-eyebrow">
              ACADEMIC RESEARCH
            </span>

            <h2>
              Research &
              <span>
                {" "}Publications.
              </span>
            </h2>

            <p>
              Peer-reviewed research accepted and presented
              at the IEEE International Conference on
              Intelligent Methods, Systems & Applications.
            </p>

          </div>
        </Reveal>


        {/* ============================================
            CONFERENCE
        ============================================ */}

        <Reveal>

          <motion.div
            className="conference-showcase"

            whileHover={{
              y: -4,
            }}
          >

            <div className="conference-banner">

              <img
                src="/images/research/imsa-banner.jpg"
                alt="IEEE IMSA Conference"
              />

              <div className="conference-banner-overlay" />


              <div className="conference-banner-content">

                <div className="conference-badge">
                  IEEE CONFERENCE
                </div>

                <h3>
                  International Conference on
                  <br />
                  Intelligent Methods, Systems
                  <br />
                  & Applications
                </h3>

                <div className="conference-year">
                  IMSA 2026
                </div>

              </div>

            </div>


            <div className="conference-school-card">

              <div className="faculty-logo-wrap">

                <img
                  src="/images/research/msa-cs.webp"
                  alt="MSA Faculty of Computer Science"
                />

              </div>


              <div>

                <span>
                  ACADEMIC AFFILIATION
                </span>

                <h4>
                  Faculty of Computer Science
                </h4>

                <p>
                  October University for Modern
                  Sciences & Arts
                </p>

                <strong>
                  MSA University
                </strong>

              </div>

            </div>

          </motion.div>

        </Reveal>


        {/* ============================================
            PUBLICATIONS HEADING
        ============================================ */}

        <Reveal>

          <div className="research-publications-heading">

            <div>

              <span>
                SELECTED RESEARCH
              </span>

              <h3>
                Published academic work.
              </h3>

            </div>


            <p>
              Research spanning intelligent sensing,
              optimization and machine learning systems.
            </p>

          </div>

        </Reveal>


        {/* ============================================
            PAPERS
        ============================================ */}

        <div className="research-paper-list">

          {papers.map((paper, index) => (

            <Reveal
              key={paper.title}
              delay={index * 0.1}
            >

              <motion.article
                className={`research-paper-card paper-${paper.accent}`}

                whileHover={{
                  y: -6,
                }}

                transition={{
                  duration: 0.3,
                }}
              >

                {/* ================================
                    PAPER PREVIEW
                ================================ */}

                <div className="research-paper-media">

                  <div className="paper-document">

                    <img
                      src={paper.image}
                      alt={`${paper.title} first page`}
                      loading="lazy"
                    />

                  </div>


                  <div className="paper-media-gradient" />


                  <span className="paper-pdf-badge">

                    <FiFileText />

                    IEEE PAPER

                  </span>

                </div>


                {/* ================================
                    PAPER DETAILS
                ================================ */}

                <div className="research-paper-content">

                  <div>

                    {/* Meta */}

                    <div className="paper-meta">

                      <span className="paper-conference">
                        {paper.conference}
                      </span>


                      <span className="paper-status">

                        <FiCheckCircle />

                        {paper.status}

                      </span>

                    </div>


                    {/* Category */}

                    <span className="paper-category">
                      {paper.category}
                    </span>


                    {/* Title */}

                    <h3>
                      {paper.title}
                    </h3>


                    {/* Description */}

                    <p className="paper-description">
                      {paper.description}
                    </p>


                    {/* Tags */}

                    <div className="paper-technologies">

                      {paper.technologies.map(
                        (technology) => (

                          <span key={technology}>
                            {technology}
                          </span>

                        )
                      )}

                    </div>


                    {/* Metrics */}

                    <div className="paper-metrics">

                      {paper.metrics.map((metric) => (

                        <div key={metric.label}>

                          <strong>
                            {metric.value}
                          </strong>

                          <span>
                            {metric.label}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* ================================
                      ACTION
                  ================================ */}

                  <div className="research-paper-actions">

                    <motion.a
                      href={paper.pdf}
                      target="_blank"
                      rel="noreferrer"

                      className="paper-primary-button"

                      whileHover={{
                        x: 4,
                      }}
                    >

                      <FiBookOpen />

                      View Paper

                      <FiArrowUpRight />

                    </motion.a>


                    <span className="paper-format">
                      PDF · IEEE Format
                    </span>

                  </div>

                </div>

              </motion.article>

            </Reveal>

          ))}

        </div>


        {/* ============================================
            SUMMARY
        ============================================ */}

        <Reveal>

          <div className="research-summary-bar">

            <div>

              <strong>
                02
              </strong>

              <span>
                Research Papers
              </span>

            </div>


            <div>

              <strong>
                IEEE
              </strong>

              <span>
                Conference Research
              </span>

            </div>


            <div>

              <strong>
                2026
              </strong>

              <span>
                Accepted & Presented
              </span>

            </div>


            <div>

              <strong>
                MSA
              </strong>

              <span>
                Faculty of Computer Science
              </span>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}


export default Research;