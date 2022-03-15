import React from 'react'
import fetchBusinesses from '../apiCalls/fetchBusinesses'

const setBusinessesToStorage = async () => {

  const allBusinesses = await fetchBusinesses()
  localStorage.setItem('businesses', JSON.stringify(allBusinesses))
}

export default setBusinessesToStorage