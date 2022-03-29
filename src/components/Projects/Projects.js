import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  const projects = JSON.parse(localStorage.getItem("projects")) || "";

  return (
    <div className="projects grid grid4:grid-cols-4 grid3:grid-cols-3 grid2:grid-cols-2 grid1:grid-cols-1 bg-[#EFF5F4] p-4">
      {projects.map((project) => (
        <div className="p-4">
          <div
            className="w-full rounded-md h-[450px] overflow-hidden bg-white shadow-md"
            id="eachProjectCard"
          >
            <img
              id="eachProjectImg"
              src={project.images[0]}
              className="object-cover w-full h-[200px]"
              alt="Project_Img"
            />
            <div
              id="eachProjectContent"
              className="flex flex-col items-start relative p-4"
            >
              <header>
                <h5
                  className="cursor-pointer font-bold text-left line-clamp-2"
                  onClick={() =>
                    (window.location.href = `/projects/${project.id}`)
                  }
                >
                  {project.title}
                </h5>
              </header>
              <p className="eachProjectCategory absolute top-0 bg-green-500 text-white font-medium px-3 py-1 translate-y-[-50%]">
                {project.category}
              </p>
              <h6 className="eachProjectGoal">
                Goal: <span className="text-green-500">${project.goal}</span>
              </h6>
              <p className="text-left">
                <span className="eachProjectDescription text-left text-sm text-gray-600 line-clamp-4">
                  {project.description}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
