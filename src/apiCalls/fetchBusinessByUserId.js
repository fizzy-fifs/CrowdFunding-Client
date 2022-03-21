import axios from 'axios'

const fetchBusinessByUserId = async(id) => {

  const data = await axios.get(`https://fundedlocal-server.herokuapp.com/api/v1.0/businesses/getbusinessesbyuserid/${id}`)
                .then((res) => res.data)

  return data;
}

export default fetchBusinessByUserId