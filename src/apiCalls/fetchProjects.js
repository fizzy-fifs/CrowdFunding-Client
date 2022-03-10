import React from 'react'
import axios from 'axios'
import { Base64 } from 'js-base64'
import Cookies from 'universal-cookie'

const fetchProjects = async() => {
  const authenticatedUser = JSON.parse(localStorage.getItem('signedInUser'))
  
  var token = cookies.get('JSESSIONID');

  const data = await axios.get('http://localhost:8080/api/v1.0/projects', {
    // body: JSON.stringify(credentials),
    headers:{
      'Content-Type': 'multipart/encrypted',
      'Authorization': `Bearer ${token}`
      // 'Authorization': `Basic ${`${authenticatedUser.userName}:${authenticatedUser.password}`}`
      
    }
  })
    .then((res) => res.data)

  return data;
}

export default fetchProjects