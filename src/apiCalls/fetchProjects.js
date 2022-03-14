import React from 'react'
import axios from 'axios'
import { Base64 } from 'js-base64'
import Cookies from 'universal-cookie'

const fetchProjects = async() => {  
  var jwtToken = localStorage.getItem("jwt")
  jwtToken = jwtToken ? jwtToken.replace(/^"(.*)"$/, '$1') : null

  const data = await axios.get('https://crowdfunding-server.herokuapp.com/api/v1.0/projects', {
    headers:{
      Authorization: "Bearer " + jwtToken
    }
  })
    .then((res) => res.data)

  return data;
}

export default fetchProjects