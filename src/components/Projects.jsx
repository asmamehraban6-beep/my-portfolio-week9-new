import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "Personal portfolio built with React.",
      image: "https://via.placeholder.com/150",
      tech: ["React", "CSS"],
      featured: true,
    },
    {
      id: 2,
      name: "Todo App",
      description: "Simple task management app.",
      image: "https://via.placeholder.com/150",
      tech: ["JavaScript", "LocalStorage"],
      featured: false,
    },
    {
      id: 3,
      name: "Weather App",
      description: "Weather app using API.",
      image: "https://via.placeholder.com/150",
      tech: ["React", "API"],
      featured: true,
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">

            {/* ⭐ Featured Badge */}
            {project.featured && <span className="badge">Featured</span>}

            {/* 🖼️ IMAGE (اضافه شد) */}
            <img
              src={project.image}
              alt={project.name}
              className="project-img"
            />

            <h3>{project.name}</h3>
            <p>{project.description}</p>

            {/* 🧩 Tech Stack */}
            <div className="tech-stack">
              {project.tech.map((item, index) => (
                <span key={index} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>

            {/* 🔗 LINK BUTTON (اضافه شد) */}
            <a href="#" className="view-btn">
              View Project
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;