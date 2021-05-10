import React from "react";

const UserProfile = (props) => {
  return (
    <article className="UserProfile">
      <div className="NameAndPhoto">
        <img
          className="Avatar"
          src={require("../images/pandaprofile.png")}
          alt="PandaAvatar"
          width="200"
          height="200"
        />
        <h2 className="UserName">Example Panda</h2>
      </div>
      <hr />
      <div className="Resource">
        <h4>My Resources</h4>
        <div>{/* Render Resource Box From Resource Page */}</div>
      </div>
      <hr />
      <div className="UserNote">
        <h4>My Wall</h4>
        <form method="POST" action="/api/users/login">
          <input type="text" placeholder="Write a Note!"></input>
          <button type="submit">Submit</button>
          <button type="submit">Edit</button>
          <button type="submit">Delete</button>
        </form>
      </div>
    </article>
  );
};

export default UserProfile;
