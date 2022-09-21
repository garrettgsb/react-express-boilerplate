/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AppData from "../hooks/useAppData";

export default function Profile(props) {

   const { state } = AppData;

   const runs = AppData(state);

  console.log(state);
  console.log(runs);

  // const [user, setUser] = useState([
  //   { id: 1, firstName: 'fake', lastName: 'user', email: 'fake.user@test.ca', role: 'runner', runs: 3},
  //   { id: 2, firstName: 'also', lastName: 'fake', email:'also.fake@test.ca', role: 'planner', runs: 5}
  // ]);

  // const userTable =  
  //     <table className="user-stats">
  //       <tbody>
  //         {user && user.map(u =>
  //       <tr key={u.id}>
  //         <td>{u.firstName} {u.lastName} {u.email} </td>
  //         <td>{u.runs} runs</td>
  //       </tr>)}
  //       </tbody>
  //     </table>
  


  const profilePicture = 
  <img className="profile-pic" src="https://cdn-icons-png.flaticon.com/512/2335/2335153.png"
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
      {/* {userTable} */}
      
     </section>
   </main>
  )
}