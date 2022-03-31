import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const registerABusinessApiCall = async (formData) => {
  let cookies = new Cookies();
  var jwtToken = cookies.get("jwt")
  var user = cookies.get('signedInUser')
  let myBusinesses = [];

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
  .post('https://fundedlocal-server.herokuapp.com/api/v1.0/businesses/newbusiness', formData, {
    headers: { 
      Authorization: "Bearer " + jwtToken
    }
    }
  ).then((res) => {
    if (res.status === 200) {
      myBusinesses.push(JSON.stringify(res.data))
      localStorage.setItem("myBusinesses",  myBusinesses)  
    }
  })
};

export default registerABusinessApiCall