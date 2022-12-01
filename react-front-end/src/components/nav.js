import { AuthContext } from '../App';
import React from "react";
import '../pages/styles/nav.css';
import { Link } from "react-router-dom";
export default function Nav(props) {

  const user = React.useContext(AuthContext);
  const setUser = props.setUser
  const logout = () => {
    setUser(null)
  }

  return (
    <nav className="nav">
      <img src="curtaindrawlogo.png" className="mainlogo" />
      <div className="nav_links">
        <div className="nav_btns">
          <Link to="/" className="nav_home" style={{ color: 'rgb(50,50,50)', textDecoration: 'none' }}>Home</Link>
          <Link to="/canvas" className="nav_new" style={{ color: 'rgb(50,50,50)', textDecoration: 'none' }}>Create New</Link>
          {!user && <Link to="/login" className="nav_new" style={{ color: 'rgb(50,50,50)', textDecoration: 'none' }}>Login</Link>}
          {user && <Link to="/" onClick={logout} className="nav_new" style={{ color: 'rgb(50,50,50)', textDecoration: 'none' }}>Logout</Link>}
        </div>
        <div className="nav_user">
          {user && <label className="nav_loggedin">Logged in as: {user.name}</label>}
          {user && <Link to="/account" className="nav_acc">
            <img src={user.avatar_url}></img>
          </Link>}
        </div>
      </div>
    </nav>
  );
}