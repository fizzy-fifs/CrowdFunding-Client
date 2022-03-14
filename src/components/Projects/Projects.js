import React from 'react'

function Projects() {
  const projects = JSON.parse(localStorage.getItem('projects'))
  return (
    <div>Projects</div>
  )
}

export default Projects