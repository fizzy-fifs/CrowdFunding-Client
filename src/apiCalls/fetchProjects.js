import React from 'react'
import axios from 'axios'
import { Base64 } from 'js-base64'

const fetchProjects = async() => {
  const authenticatedUser = localStorage.getItem('signedInUser')

  const data = await axios.get("https://crowdfunding-server.herokuapp.com/api/v1.0/projects", {
    headers:{
      "Content-Type": "text/plain",
      "Authorization": `Basic ${`${authenticatedUser.userName}:${authenticatedUser.password}`}`
    }
  })
    .then((res) => res.data)

  return data;
}

export default fetchProjects