import { useParams, Link } from "react-router-dom";


function ProjectDetails() {

  const { id } = useParams();


  const projects = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "A personal portfolio built with React."
    },

    {
      id: "2",
      title: "Todo App",
      description: "A task management application."
    },

    {
      id: "3",
      title: "Landing Page",
      description: "A responsive website design."
    }
  ];


  const project = projects.find(
    (item) => item.id === id
  );


  if (!project) {
    return (
      <div>
        <h2>Project Not Found</h2>
        <Link to="/projects">
          Back to Projects
        </Link>
      </div>
    );
  }


  return (
    <section>

      <h1>
        {project.title}
      </h1>

      <p>
        {project.description}
      </p>


      <Link to="/projects">
        <button>
          Back
        </button>
      </Link>

    </section>
  );

}


export default ProjectDetails;