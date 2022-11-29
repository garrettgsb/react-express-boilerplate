import React from "react";
import './styles/account.css'
export default function AccountPage() {
  return(
    <main className="main_page">
      <article className="sidebar">
        
      </article>
      <section className="main_section">
        <section className="user">
          <img src="user_placeholder.png" />
          <div className="user_info">
            <label className="user_name">testName</label>
            <desc>userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo userinfo</desc>
            <label className="location">Location: CANADA</label>
            <label className="total_projects">Total Projects: 6</label>
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
      </section>
    </main>
  )
}