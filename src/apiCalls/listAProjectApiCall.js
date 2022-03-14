import React from "react";

const listAProjectApiCall = async(event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  formData.set('title', formData.get("projectTitle"))
  formData.set('category', formData.get("category"))
  formData.set('description', formData.get("description"))
  formData.set('goal', formData.get("goal"))
  formData.set('endDate', formData.get("endDate"))
  formData.set('projectOwner', formData.get("associatedBusiness"))
  // formData.set('businessId', getBusinessId())

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