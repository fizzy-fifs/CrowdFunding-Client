import React from "react";
import axios from "axios";

const listAProjectApiCall = async(formData) => {

  var jwtToken = localStorage.getItem("jwt")
  jwtToken = jwtToken ? jwtToken.replace(/^"(.*)"$/, '$1') : null

  await axios
  .post('https://fundedlocal-server.herokuapp.com/api/v1.0/projects/newproject', formData, {
    headers: { 
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + jwtToken
    }
  }).then((res)=> res.data)
}

export default listAProjectApiCall