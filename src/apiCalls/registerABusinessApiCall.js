import React from "react";
import axios from "axios";

const registerABusinessApiCall = async (formData) => {

  var jwtToken = localStorage.getItem("jwt")
  jwtToken = jwtToken ? jwtToken.replace(/^"(.*)"$/, '$1') : null

  await axios
  .post('https://fundedlocal-server.herokuapp.com/api/v1.0/businesses/newbusiness', formData, {
    headers: { 
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + jwtToken
    }
    }
  ).then((res) => {
    if (res.status === 200) {
      localStorage.setItem("myBusiness", JSON.parse(res.data))
    }
  })
};

export default registerABusinessApiCall