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
          style={{ cursor: "pointer", width: '36rem', height: '18rem' }}
          onClick={() => (window.location.href = `/projects/${project.id}`)}
        >
          {/* <div */}
          {/* > */}
          <Card.Img src={project.images[0]} className="card-img-top" style={{ height: '50%', objectFit: 'contain' }} />
          {/* <div className="eachProjectImg"> */} {/* <img src= />{" "} */}
          {/* </div>{" "} */}
          <Card.Body>
            {" "}
            <Card.Title>
              {" "}
              {/* <h1 className="eachProjectTitle"> */}
              {project.title}
              {/* </h1> */}
            </Card.Title>
            <Card.Text>
              {/* <h3 className="eachProjectCategory"> */}
              {project.category}
              {/* </h3> */}
              {/* <h5 className='eachProjectAmountRaised'>Raised: ${project.amountRaised}</h5> */}
              {/* <h4 className="eachProjectGoal"> */}
              Goal: ${project.goal}
              {/* </h4> */}
              {/* <p className="eachProjectDescription"> */}
              {project.description}
              {/* </p>{" "} */}
            </Card.Text>
          </Card.Body>
          {/* </div> */}
        </Card>
      ))}
    </div>
  );
}

export default Projects;
