import {
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiDotnet,
    SiTypescript,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiMongodb,
    SiGit,
    SiPostman,
    SiFlutter,
    SiArduino,
  } from "react-icons/si";
  
  import { FaDatabase } from "react-icons/fa";
  
  const technologies = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      className: "javascript",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      className: "node",
    },
    {
      name: "Python",
      icon: <SiPython />,
      className: "python",
    },
    {
      name: "React",
      icon: <SiReact />,
      className: "react",
    },
    {
      name: ".NET",
      icon: <SiDotnet />,
      className: "dotnet",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      className: "typescript",
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      className: "php",
    },
    {
      name: "Laravel",
      icon: <SiLaravel />,
      className: "laravel",
    },
    {
      name: "SQL Server",
      icon: <FaDatabase />,
      className: "sqlserver",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      className: "mysql",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      className: "mongodb",
    },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      className: "flutter",
    },
    {
      name: "Arduino",
      icon: <SiArduino />,
      className: "arduino",
    },
    {
      name: "Git",
      icon: <SiGit />,
      className: "git",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      className: "postman",
    },
  ];
  
  function TechStack() {
    return (
      <section className="section technology-section">
        <div className="container">
          <div className="section-heading centered">
            <span>TECH STACK</span>
  
            <h2>Technologies I Work With</h2>
  
            <p>
              Technologies and tools I use to build modern,
              scalable software applications.
            </p>
          </div>
  
          <div className="technology-board">
            {technologies.map((technology) => (
              <div
                className="technology-item"
                key={technology.name}
              >
                <div
                  className={`technology-circle ${technology.className}`}
                >
                  {technology.icon}
                </div>
  
                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default TechStack;