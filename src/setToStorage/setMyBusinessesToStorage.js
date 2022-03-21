import Cookies from "universal-cookie"
import fetchBusinessByUserId from "../apiCalls/fetchBusinessByUserId"

const setMyBusinessesToStorage = async () => {
  const cookie = new Cookies();
  let user = cookie.get('signedInUser') || '';

  if (user !== '') {
    const myBusinesses = await fetchBusinessByUserId(user.id);
    localStorage.setItem('myBusinesses', JSON.stringify(myBusinesses));
  }
}

export default setMyBusinessesToStorage