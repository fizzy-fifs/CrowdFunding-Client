import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./Projects.css";

function Projects() {
  const projects = JSON.parse(localStorage.getItem("projects")) || "";

  return (
    <div className="projects">
      {projects.map((project) => (
        <div
          id="eachProjectCard"
          // style={{ cursor: "pointer", width: "", height: "" }}
          onClick={() => (window.location.href = `/projects/${project.id}`)}
        >
          <img
            id="eachProjectImg"
            src={project.images[0]}
            style={{
              maxHeight: "15vw",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
          <div id="eachProjectContent">
            <header className="eachProjectTitle">
              <h4 className="eachProjectTitle"> {project.title} </h4>
            </header>
            <p className="eachProjectCategory">{project.category}</p>
            <h3 className="eachProjectGoal">Goal: ${project.goal}</h3>
            <p className="eachProjectDescription">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
