import { AuthContext } from '../App'
import React from "react";
import './styles/account.css'
import Axios from 'axios';
import UserImgs from '../components/userimgs';

export default function AccountPage(props) {

  const user = React.useContext(AuthContext);

  return(
    <main className="main_page">

      {!user && <p>Please <a href="/login">Log in</a></p>}
      {user && <section className="main_section">
      
        <section className="user">
          <img src={user.avatar_url}/>
          <div className="user_info">
            <label className="user_name">{user.name}</label>
            <desc>{user.bio}</desc>
            <label className="location">{user.location}</label>
            <label className="total_projects">Total Projects: 0</label>
          </div>
        </section>
        <UserImgs
          user={user}
        />
      </section>}
    </main>
  )
}