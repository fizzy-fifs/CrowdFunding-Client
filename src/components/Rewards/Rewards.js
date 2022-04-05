import React from 'react'
import Cookies from 'universal-cookie';
import updateStoredUserInfo from '../../setToStorage/updateStoredUserInfo';

function Rewards() {
  updateStoredUserInfo();
  const cookie = new Cookies();
  let user = cookie.get('signedInUser')
  let rewards = user.earnedRewards

  if (!rewards) {
    return (<div className='text-7xl max-w-[50%] mb-3 items-center'><h1>You currently do not have any rewards. Support your favorite projects today to start earning rewards </h1></div>)
  }
  return (
    <div>
      {rewards.map(reward => (
        <div>
          {reward.id}{reward.name}{reward.associatedBusiness}
        </div>
      ))}
    </div>
  )
}

export default Rewards