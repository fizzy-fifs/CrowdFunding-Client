import React from "react";
import axios from "axios";

const registerABusinessApiCall = async (formData) => {

  var jwtToken = localStorage.getItem("jwt")
  jwtToken = jwtToken ? jwtToken.replace(/^"(.*)"$/, '$1') : null

  axios.interceptors.request.use(
    config => { 
      config.headers.Authorization = "Bearer " + jwtToken;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  )

  await axios
  .post('http://localhost:8080/api/v1.0/businesses/newbusiness', formData, {
    headers: { 
      // 'content-type': 'multipart/form-data',
      // 'content-type': 'application/json',
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