import React from "react";

const registerABusinessApiCall = async (event) => {
  event.preventDefault();

  let user = JSON.parse(localStorage.getItem("signedInUser"));

  const formData = new FormData(event.target);

  formData.set("name", formData.get("businessName"));
  formData.set("description", formData.get("description"));
  formData.set('owner', user)

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