import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

const sections = [
  "home",
  "projects",
  "experience",
  "about",
  "research",
  "certifications",
];

const labels = {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    about: "About",
    research: "Research",
    certifications: "Certificates",
  };

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.header
        className="floating-navbar"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <a
          href="#home"
          className="floating-brand"
          onClick={closeMenu}
        >
          <div className="brand-symbol">
            ME
          </div>

          <div className="brand-text">
            <strong>Mohamed</strong>
            <span>Elsayed</span>
          </div>
        </a>

        <nav className="floating-nav-links">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={
                active === section
                  ? "active"
                  : ""
              }
            >
              {labels[section]}
            </a>
          ))}
        </nav>

        <div className="floating-nav-actions">
          <a
            href="https://github.com/mohamedelsayed31"
            target="_blank"
            rel="noreferrer"
            className="nav-social-button"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-elsayed-444003298/"
            target="_blank"
            rel="noreferrer"
            className="nav-social-button linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#contact"
            className="navbar-contact-button"
          >
            Let's Talk
            <FiArrowUpRight />
          </a>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
          >
            {sections.map((section) => (
              <a
                href={`#${section}`}
                onClick={closeMenu}
                key={section}
              >
                {labels[section]}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;