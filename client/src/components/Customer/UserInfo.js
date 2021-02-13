import Logo from './Logo'
import WelcomeMessage from './WelcomeMessage'
import CurrentBeans from './CurrentBeans'

function UserInfo() {
  return(
    <div>
      <Logo />
      <WelcomeMessage name='Andy'/>
      <CurrentBeans currentBeans='230' />
    </div>
  )
}

export default UserInfo;