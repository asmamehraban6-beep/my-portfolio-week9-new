import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import TechBadge from "./TechBadge";
import "./ProjectCard.css";


function ProjectCard({ project }) {

  const { favorites, toggleFavorite } =
    useContext(FavoriteContext);


  const [showInfo, setShowInfo] = useState(false);


  const isFavorite = favorites.includes(project.id);


  return (

    <div className="project-card">


      <h2>
        {project.image} {project.title}
      </h2>


      <span className="badge">
        {project.status}
      </span>


      <p>
        {project.description}
      </p>



      {Array.isArray(project.technology) && (

        <div>

          {project.technology.map((tech)=>(

            <TechBadge
              key={tech}
              tech={tech}
            />

          ))}

        </div>

      )}



      <button
        onClick={() =>
          setShowInfo(!showInfo)
        }
      >

        {showInfo ? "Hide Info" : "More Info"}

      </button>



      {showInfo && (

        <p className="more-info">

          {project.details || 
          "More information about this project."}

        </p>

      )}



      <button
        onClick={() =>
          toggleFavorite(project.id)
        }
      >

        {isFavorite
          ? "⭐ Favorited"
          : "☆ Add Favorite"}

      </button>



      <Link to={`/projects/${project.id}`}>

        <button>
          View Project
        </button>

      </Link>



    </div>

  );

}


export default ProjectCard;