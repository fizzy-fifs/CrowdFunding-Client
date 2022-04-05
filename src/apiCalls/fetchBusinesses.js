import React from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const fetchBusinesses = async() => {  
  let cookies = new Cookies();
  var jwtToken = cookies.get("jwt")

  const data = await axios.get('https://fundedlocal-server.herokuapp.com/api/v1.0/businesses')
    .then((res) => res.data)

  return data;
}

export default fetchBusinesses