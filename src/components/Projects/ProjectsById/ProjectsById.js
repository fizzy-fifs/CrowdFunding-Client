import React, { useEffect, useState } from 'react'
import processPayments from '../../../apiCalls/processPayments'
import Payments from '../../StripePayments/Payments'
import { Navigate } from 'react-router-dom'

function ProjectsById(props) {
  const projects = JSON.parse(localStorage.getItem('projects')) || ''
  const [amount, setAmount] = useState('')
  
  const donate = (amount) => {
    window.location.href=`http://localhost:8080/api/v1.0/payments/${amount}`
  }

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
          <label>How much would you like to donate? <br/>
            $<input type="number" id="amount" placeholder="$0.00" required onChange={(e) => setAmount(e.target.value)}/>
          </label>
          <button className='donate' style={{ cursor: 'pointer' }} onClick={() => donate(amount)} >Donate!</button>
        </div>
      ))}
    </div>
  )
}

export default ProjectsById