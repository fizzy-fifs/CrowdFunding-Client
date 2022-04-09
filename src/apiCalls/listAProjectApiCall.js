import axios from "axios";
import Cookies from "universal-cookie";
import addNotification from "../components/Notifications/Notifications";

const listAProjectApiCall = async(formData) => {
  let cookies = new Cookies();
  var jwtToken = cookies.get("jwt")

  await axios
  .post('https://fundedlocal-server.herokuapp.com/api/v1.0/projects/newproject', formData, {
    headers: { 
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + jwtToken
    }
  }).then((res)=> {
    if (res.data.name){
      localStorage.setItem('myProjects', JSON.stringify(res.data.project))
    }else {
      addNotification(res.data, "danger")
    }
     })
}

export default listAProjectApiCall