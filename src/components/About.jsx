import { useState } from "react";
import "./About.css";

function About({ title, description }) {
  const [showMore, setShowMore] = useState(false);

  const hobbies = ["Coding", "Reading", "Design", "Gaming"];

  return (
    <div className="about-container">
      <h2>{title}</h2>

      <p>
        {showMore ? description : description.slice(0, 80) + "..."}
      </p>

      {/* 🧩 Hobbies list */}
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      {/* 🔘 Button */}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default About;