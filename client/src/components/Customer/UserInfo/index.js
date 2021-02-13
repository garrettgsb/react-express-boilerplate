import './styles.scss'
import Logo from './Logo'
import WelcomeMessage from './WelcomeMessage'
import CurrentBeans from './CurrentBeans'
import LifetimeBeans from './LifetimeBeans'
import Tier from './Tier'

function UserInfo() {
  return(
    <div className='user-info-container'>
      <div className='user-info-left-container'>
        <div className='logo-welcome-container'>
        <Logo />
        <WelcomeMessage name='Andy'/>
        </div>
        <Tier tier='Super Bean' />
      </div>
      <div className='beans-container'>
        <CurrentBeans currentBeans='230' />
        <LifetimeBeans lifetimeBeans='560' />
      </div>
    </div>
  )
}

export default UserInfo;