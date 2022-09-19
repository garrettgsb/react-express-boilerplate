import React from "react";

export default function Profile(props) {

  const profilePicture = 
  <img class="profile-pic" src="https://cdn-icons-png.flaticon.com/512/2335/2335153.png"
   alt="icon-profile"></img>

  //create user, stats variables connected to db

  return (
   <main className="profile-section">
     <section className="profile-header">
      {profilePicture}
      <h1>Welcome user</h1>
      <p>You have: Completed 10 runs. For a total of 100 minutes and 100 km.</p>
     </section>

     
     <section className="profile-stats">
      <h1>Runs</h1>
      
     </section>
   </main>
  )
}