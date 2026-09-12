import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import About from "./components/About";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />

        <TechStack />

        <Projects />

        <Services />

        <Experience />

        <About />

        <Research />

        <Certifications />

        <Contact />
      </main>
    </div>
  );
}

export default App;