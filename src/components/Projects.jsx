import { useState, useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import TechBadge from "../components/TechBadge";
import "./Projects.css";


function Projects() {

  const [filter, setFilter] = useState("All");

  const [selectedProject, setSelectedProject] = useState(null);

  const { favorites, toggleFavorite } = useContext(FavoriteContext);


  const projects = [

    {
      id: 1,
      title: "Portfolio Website",
      image: "🌐",
      description: "A personal portfolio built with React.",
      technology: ["React", "CSS"],
      status: "Featured",
      progress: 90,
      github: "https://github.com/",
      details: "A responsive developer portfolio with modern UI design."
    },


    {
      id: 2,
      title: "Todo App",
      image: "✅",
      description: "A task management application.",
      technology: ["JavaScript"],
      status: "In Progress",
      progress: 70,
      github: "https://github.com/",
      details: "An application for managing daily tasks."
    },


    {
      id: 3,
      title: "Landing Page",
      image: "🎨",
      description: "A responsive website design.",
      technology: ["CSS"],
      status: "Completed",
      progress: 100,
      github: "https://github.com/",
      details: "A clean responsive landing page."
    }

  ];



  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          project.technology.includes(filter)
        );



  return (

    <section className="projects">

      <h2>My Projects</h2>


      <div className="filter-buttons">

        <button onClick={() => setFilter("All")}>
          All
        </button>

        <button onClick={() => setFilter("React")}>
          React
        </button>

        <button onClick={() => setFilter("JavaScript")}>
          JavaScript
        </button>

        <button onClick={() => setFilter("CSS")}>
          CSS
        </button>

      </div>



      <div className="projects-grid">


        {filteredProjects.map((project)=>(

          <div className="project-card" key={project.id}>


            <h3>
              {project.image} {project.title}
            </h3>


            <span className="badge">
              {project.status}
            </span>


            <p>
              {project.description}
            </p>


            <div>

              {project.technology.map((tech)=>(

                <TechBadge
                  key={tech}
                  tech={tech}
                />

              ))}

            </div>


            <p>
              Progress: {project.progress}%
            </p>


            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width:`${project.progress}%`
                }}
              >

              </div>

            </div>



        <div className="project-actions">

  <button
    onClick={() => toggleFavorite(project.id)}
  >
    {
      favorites.includes(project.id)
      ? "⭐ Favorited"
      : "☆ Add Favorite"
    }
  </button>


  <button
    onClick={() => setSelectedProject(project)}
  >
    More Info
  </button>


  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    <button>
      View Code
    </button>
  </a>

</div>


          </div>

        ))}


      </div>



      {selectedProject && (

        <div className="details-box">

          <h3>
            {selectedProject.image} {selectedProject.title}
          </h3>


          <p>
            {selectedProject.details}
          </p>


          <button
            onClick={() => setSelectedProject(null)}
          >
            Close
          </button>


        </div>

      )}


    </section>

  );

}


export default Projects;