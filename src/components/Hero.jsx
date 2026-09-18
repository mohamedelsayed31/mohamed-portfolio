import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiFileText,
} from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Decoration */}
      <div className="hero-background">
        <div className="hero-grid-lines"></div>

        <motion.div
          className="hero-orb hero-orb-one"
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="hero-orb hero-orb-two"
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container hero-content">
        {/* LEFT SIDE */}
        <div className="hero-copy">
          <motion.div
            className="hero-status"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
          >
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
          >
            Hi, I'm Mohamed Elsayed.
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Building
            <span>
              Digital
              <br />
              Experiences.
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.7,
            }}
          >
            Software Engineering student and Full-Stack Developer
            building scalable web applications, backend systems
            and intelligent software solutions.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
          >
            <motion.a
              href="#projects"
              className="primary-btn"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              View Projects
              <FiArrowUpRight />
            </motion.a>

            <motion.a
              href="/Mohamed_Elsayed_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <FiFileText />
              View CV
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-person"
          initial={{
            opacity: 0,
            scale: 0.92,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-photo-glow"></div>

          <motion.div
            className="hero-photo-card"
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <img
              src="/images/profile.jpeg"
              alt="Mohamed Elsayed - Software Engineer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>

          {/* Experience Stat */}
          <motion.div
            className="floating-stat hero-stat-one"
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                delay: 0.9,
                duration: 0.5,
              },

              scale: {
                delay: 0.9,
                duration: 0.5,
              },

              x: {
                delay: 0.9,
                duration: 0.5,
              },

              y: {
                delay: 1.3,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <strong>7</strong>
            <span>Experiences</span>
          </motion.div>

          {/* Research Stat */}
          <motion.div
            className="floating-stat hero-stat-two"
            initial={{
              opacity: 0,
              scale: 0.85,
              x: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: [0, 8, 0],
            }}
            transition={{
              opacity: {
                delay: 1,
                duration: 0.5,
              },

              scale: {
                delay: 1,
                duration: 0.5,
              },

              x: {
                delay: 1,
                duration: 0.5,
              },

              y: {
                delay: 1.5,
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <strong>2</strong>
            <span>IEEE Papers</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.4,
          duration: 0.7,
        }}
      >
        <span>SCROLL</span>

        <div></div>
      </motion.div>
    </section>
  );
}

export default Hero;