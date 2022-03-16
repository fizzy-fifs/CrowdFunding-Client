import axios from "axios";
import Cookies from "universal-cookie";

const listAProjectApiCall = async(formData) => {
  let cookies = new Cookies();
  var jwtToken = cookies.get("jwt")

  await axios
  .post('https://fundedlocal-server.herokuapp.com/api/v1.0/projects/newproject', formData, {
    headers: { 
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + jwtToken
    }
  }).then((res)=> localStorage.setItem('myProjects', JSON.stringify(res.data)) )
}

export default listAProjectApiCall