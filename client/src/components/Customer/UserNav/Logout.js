import { Link } from 'react-router-dom'

function Logout(props) {
  // const route = props.route

  return (
    <Link to='/orderconfirmed'>Log out</Link>
    // <a href={route}>Logout</a>
  )
}

export default Logout