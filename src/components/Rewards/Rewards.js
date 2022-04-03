import React from 'react'
import Cookies from 'universal-cookie';
import updateStoredUserInfo from '../../setToStorage/updateStoredUserInfo';

function Rewards() {
  updateStoredUserInfo();
  const cookie = new Cookies();
  let user = cookie.get('signedInUser')
  let rewards = user.earnedRewards

  if (!rewards) {
    return (<div><header>You currently do not have any rewards. Support your favorite projects today to start earning rewards </header></div>)
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