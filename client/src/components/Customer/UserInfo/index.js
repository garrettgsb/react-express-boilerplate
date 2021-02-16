import './styles.scss'
import Logo from './Logo'
import WelcomeMessage from './WelcomeMessage'
import CurrentBeans from './CurrentBeans'
import LifetimeBeans from './LifetimeBeans'
import Tier from './Tier'
import { useContext } from 'react'
import {appContext} from '../../appContext'

function UserInfo() {

  const {state} = useContext(appContext) 
  console.log(state)
  const userData = state.user[0]

  return(
    <div className='user-info-container'>
      <div className='user-info-left-container'>
        <div className='logo-welcome-container'>
        <Logo />
        <WelcomeMessage name={userData.username}/>
        </div>
        <Tier tier={userData.tier} />
      </div>
      <div className='beans-container'>
        <CurrentBeans currentBeans={userData.current_beans} />
        <LifetimeBeans lifetimeBeans={userData.lifetime_beans} />
      </div>
    </div>
  )
}

export default UserInfo;