import React from "react";
import MapContainerAllProjects from "./Map/MapContainerAllProjects";

function MapWithAllProjects() {
  let projects = JSON.parse(localStorage.getItem("projects")) || "";
  let latAndLng = []

  const loadLatAndLng = () => {
    projects.map(project => {latAndLng.push({ lat: project.latitude, lng: project.longitude })})
  }
  
  loadLatAndLng();
  console.log(latAndLng.map(eachLatAndLng => {return eachLatAndLng.lat}))
  console.log(latAndLng.map(eachLatAndLng => {return eachLatAndLng.lng}))

  return (
    <div>
      <MapContainerAllProjects
        latAndLng={latAndLng}
      />
    </div>
  );
}

export default MapWithAllProjects;
