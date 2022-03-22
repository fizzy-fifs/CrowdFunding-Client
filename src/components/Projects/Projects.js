import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function Projects() {
  const projects = JSON.parse(localStorage.getItem("projects")) || "";

  return (
    <div>
      {projects.map((project) => (
        <Card
          className="mb-3"
          style={{ cursor: "pointer", width: "36rem", height: "auto" }}
          onClick={() => (window.location.href = `/projects/${project.id}`)}
        >
          <Card.Img
            variant="top"
            src={project.images[0]}
            style={{
              maxHeight: "15vw",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {project.category}
            </Card.Subtitle>
            <Card.Subtitle> Goal: ${project.goal}</Card.Subtitle>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
