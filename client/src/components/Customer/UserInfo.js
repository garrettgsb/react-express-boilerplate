import Logo from './Logo'
import WelcomeMessage from './WelcomeMessage'
import CurrentBeans from './CurrentBeans'
import LifetimeBeans from './LifetimeBeans'
import Tier from './Tier'

function UserInfo() {
  return(
    <div>
      <Logo />
      <WelcomeMessage name='Andy'/>
      <Tier tier='Super Bean' />
      <CurrentBeans currentBeans='230' />
      <LifetimeBeans lifetimeBeans='560' />
    </div>
  )
}

export default UserInfo;