import React, { useEffect } from 'react'
import processPayments from '../../../apiCalls/processPayments'
import Payments from '../../StripePayments/Payments'

function ProjectsById(props) {
  const projects = JSON.parse(localStorage.getItem('projects')) || ''

  return (
    <div>
      {projects.filter(project => project.id === props.projectId).map(filteredProject => (
        <div>
          <div className='selectedProjectImg'> <img src={filteredProject.images.map(image => <img src={image[0]} />)} /> </div>
          <h1 className='selectedProjectTitle'>{filteredProject.title}</h1>
          <h3 className='selectedProjectCategory'>{filteredProject.category}</h3>
          {/* <h5 className='eachProjectAmountRaised'>Raised: ${project.amountRaised}</h5> */}
          <h4 className='selectedProjectGoal'>Goal: ${filteredProject.goal}</h4>
          <p className='selectedProjectDescription'>{filteredProject.description}</p>
          {useEffect(() => {
            processPayments()
          }, [])
          }

        </div>
      ))}
    </div>
  )
}

export default ProjectsById