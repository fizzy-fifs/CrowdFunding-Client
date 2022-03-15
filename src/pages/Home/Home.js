import React from 'react'
import ListAProject from '../../components/ListAProject/ListAProject'
import RegisterBusiness from '../../components/RegisterBusiness/RegisterBusiness'

function Home() {
  return (
    <div>
      <RegisterBusiness />
      <ListAProject />
    </div>
  )
}

export default Home