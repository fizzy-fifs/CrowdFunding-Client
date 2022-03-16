import axios from "axios";
import Cookies from "universal-cookie"


const fetchProjectsById = async(id) => {
  let cookies = new Cookies();
  var jwtToken = cookies.get("jwt")

  const data = await axios.get(`http://localhost:8080/api/v1.0/projects${id}`)
                .then((res) => res.data)

  return data;
}

export default fetchProjectsById