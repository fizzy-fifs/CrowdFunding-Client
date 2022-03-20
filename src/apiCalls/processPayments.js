import axios from "axios";
import Cookies from "universal-cookie";

const processPayments = async() => {
  let cookies = new Cookies();
  var jwtToken = cookies.get("jwt")

  const data = await axios.get('http://localhost:8080/api/v1.0/payments', {
    headers:{
      Authorization: "Bearer " + jwtToken
    }
  })
    .then((res) => res.data)

  return data;
}

export default processPayments