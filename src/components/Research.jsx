import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { FiArrowUpRight } from "react-icons/fi";

const papers = [
  {
    number: "01",
    title:
      "A GIS-Aware Deployment-Optimized Wireless Sensor Network for Early Forest Fire Detection",
    category:
      "Wireless Sensor Networks · GIS · Early Forest Fire Detection",
    conference: "IEEE IMSA 2026",
    status: "Accepted & Presented",
  },
  {
    number: "02",
    title:
      "Efficient Human Activity Recognition Using Magnitude-Enhanced Statistical Features and Extra Trees Ensemble",
    category:
      "Machine Learning · Human Activity Recognition · Extra Trees",
    conference: "IEEE IMSA 2026",
    status: "Accepted & Presented",
  },
];

function Research() {
  return (
    <section
      className="research-premium-section"
      id="research"
    >
      <div className="container">

        <Reveal>
          <div className="research-heading-premium">
            <span className="research-eyebrow">
              ACADEMIC RESEARCH
            </span>

            <h2>
              Research &
              <span> Publications.</span>
            </h2>

            <p>
              Peer-reviewed research accepted and presented
              at the IEEE International Conference on
              Intelligent Methods, Systems & Applications.
            </p>
          </div>
        </Reveal>

        {/* Conference Identity */}
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

              <div className="conference-banner-overlay"></div>

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
                <span>ACADEMIC AFFILIATION</span>

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

        {/* Publications */}
        <div className="research-publications-grid">
          {papers.map((paper, index) => (
            <Reveal
              key={paper.number}
              delay={index * 0.1}
            >
              <motion.article
                className="publication-premium-card"
                whileHover={{
                  y: -8,
                }}
              >
                <div className="publication-top">
                  <span className="publication-number">
                    {paper.number}
                  </span>

                  <div className="publication-mini-brand">
                    <img
                      src="/images/research/msa-cs.webp"
                      alt=""
                    />

                    <span>
                      IEEE IMSA
                    </span>
                  </div>
                </div>

                <span className="publication-category">
                  {paper.category}
                </span>

                <h3>
                  {paper.title}
                </h3>

                <div className="publication-bottom">
                  <div>
                    <span>CONFERENCE</span>

                    <strong>
                      {paper.conference}
                    </strong>
                  </div>

                  <div>
                    <span>STATUS</span>

                    <strong className="accepted-status">
                      {paper.status}
                    </strong>
                  </div>

                  <motion.div
                    className="publication-arrow"
                    whileHover={{
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
          <div className="research-summary-bar">
            <div>
              <strong>02</strong>
              <span>Published Research Papers</span>
            </div>

            <div>
              <strong>IEEE</strong>
              <span>Conference Publication</span>
            </div>

            <div>
              <strong>2026</strong>
              <span>Accepted & Presented</span>
            </div>

            <div>
              <strong>MSA</strong>
              <span>Faculty of Computer Science</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Research;