import React from 'react'
import fetchProjects from '../apiCalls/fetchProjects'

const setProjectsToStorage = async () => {

  const allProjects = await fetchProjects()
  localStorage.setItem('projects', JSON.stringify(allProjects))
}

export default setProjectsToStorage