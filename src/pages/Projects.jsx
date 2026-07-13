import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";


function Projects() {

  const [filter, setFilter] = useState("All");


  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      image: "🌐",
      description: "A personal portfolio built with React.",
      technology: "React",
      status: "Featured"
    },

    {
      id: 2,
      title: "Todo App",
      image: "✅",
      description: "A task management application.",
      technology: "JavaScript",
      status: "In Progress"
    },

    {
      id: 3,
      title: "Landing Page",
      image: "🎨",
      description: "A responsive website design.",
      technology: "CSS",
      status: "Completed"
    }
  ];


  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.technology === filter
        );


  return (

    <section className="projects">


      <h1>
        My Projects
      </h1>


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


        {filteredProjects.map((project) => (

          <ProjectCard

            key={project.id}

            project={project}

          />

        ))}


      </div>


    </section>

  );

}


export default Projects;