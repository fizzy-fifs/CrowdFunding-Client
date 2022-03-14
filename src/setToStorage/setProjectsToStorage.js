import React from 'react'
import fetchProjects from '../apiCalls/fetchProjects'

const setProjectsToStorage = async () => {

  const allProjects = await fetchProjects()
//  console.log(allProjects)
  localStorage.setItem('projects', JSON.stringify(allProjects))
}

export default setProjectsToStorage