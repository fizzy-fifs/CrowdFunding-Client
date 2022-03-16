import React from 'react'
import { Navigate } from 'react-router-dom'
import setProjectsToStorage from '../../setToStorage/setProjectsToStorage'

function Projects() {
  const projects = JSON.parse(localStorage.getItem('projects')) || ''
  
  const selectedProject = (id) => {
    return <Navigate to='/projects/:id' />
  }

  return (
    <div>
      {projects.map(project => (
        <div style={{ cursor: 'pointer' }} onClick={() => window.location.href=`/projects/${project.id}`}>

          <div className='eachProjectImg'> <img src={project.images[0]} /> </div>
          <h1 className='eachProjectTitle'>{project.title}</h1>
          <h3 className='eachProjectCategory'>{project.category}</h3>
          {/* <h5 className='eachProjectAmountRaised'>Raised: ${project.amountRaised}</h5> */}
          <h4 className='eachProjectGoal'>Goal: ${project.goal}</h4>
          <p className='eachProjectDescription'>{project.description}</p>

        </div>
      ))}
    </div>
  )
}

export default Projects