import React from 'react'
import Cookies from 'universal-cookie'
import ListAProject from '../../components/ListAProject/ListAProject'
import Projects from '../../components/Projects/Projects';
import RegisterBusiness from '../../components/RegisterBusiness/RegisterBusiness'
import SignIn from '../../components/SignIn/SignIn';

function Home() {
  let cookies = new Cookies();
  let user = cookies.get('signedInUser') || ''

  if (user === '') {
    return <SignIn />
  } else {
    return (
      <div>
        <Projects />
        {/* <RegisterBusiness /> */}
        <ListAProject />
      </div>
    )
  }
  
}

export default Home