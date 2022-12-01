import { AuthContext } from '../App'
import React from "react";
import './styles/account.css'

export default function AccountPage(props) {

  const user = React.useContext(AuthContext);

  return(
    <main className="main_page">
      <article className="sidebar">     
      </article>
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
        <section className="user_images">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
          <div className="img4"></div>
          <div className="img5"></div>
          <div className="img6"></div>
        </section>
      </section>}
    </main>
  )
}