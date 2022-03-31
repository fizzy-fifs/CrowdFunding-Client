import axios from 'axios'
import Cookies from 'universal-cookie'

const fetchUserById = async(id) => {  
  let cookies = new Cookies();
  var jwtToken = cookies.get("jwt")

  const data = await axios.get(`https://fundedlocal-server.herokuapp.com/api/v1.0/users/${id}`, {
    headers:{
      Authorization: "Bearer " + jwtToken
    }
  })
    .then((res) => res.data)

  return data;
}

export default fetchUserById