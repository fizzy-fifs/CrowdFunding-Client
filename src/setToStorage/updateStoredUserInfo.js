import Cookies from "universal-cookie"
import fetchUserById from '../apiCalls/fetchUserById'
import SignIn from '../components/SignIn/SignIn'

const updateStoredUserInfo = async() => {
  const cookie = new Cookies();
  let user = cookie.get('signedInUser') || ''
  
  if (user !== '') {
    const userInfo = await fetchUserById(user.id);
    cookie.set('signedInUser', userInfo);
  }
  <SignIn/>
}

export default updateStoredUserInfo