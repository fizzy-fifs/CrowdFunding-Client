import React from "react";
import axios from "axios";

const registerABusinessApiCall = async (business, images) => {

  var jwtToken = localStorage.getItem("jwt")
  jwtToken = jwtToken ? jwtToken.replace(/^"(.*)"$/, '$1') : null

  await axios
  .post('https://fundedlocal-server.herokuapp.com/api/v1.0/businesses/newbusiness', business, images, {
    headers: { 
      'content-type': 'multipart/form-data',
      'content-type': 'application/json',
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