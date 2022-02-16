import React from "react";
import { useParams } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import PlantList from "./components/Profile/PlantList";
import { getPlantsForUser, getUserById } from "./helpers/selectors";
import "./components/Profile/Profile.css";

export default function Profile({ name, plants, users }) {

  const params = useParams();
  const user_id = params.user_id;

  const user = getUserById(users, user_id);
  const plantsForUser = getPlantsForUser(plants, user_id);

  return (
    <main className="container">
      <div className="plants">
        <h2>
          Welcome {name}, thanks for visiting my profile!
        </h2>
        <div className="ui container">
          <PlantList plants={plantsForUser} />
        </div>
      </div>
      <div>
        <div className="ui card">
          <div className="image">
            <img src={user && user.avatar} alt="avatar" />
          </div>
          <div className="content">
            <a className="header">{user && user.name}</a>
            <div className="meta">
              <span className="date">Joined in {user && user.created_at.split('-')[0]}</span>
            </div>
            <div className="description">
              {user && user.name} is an art director living in New York.
              <h5>"{user && user.quote}"</h5>
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="leaf icon"></i>
              {plantsForUser && plantsForUser.length} Plants
            </a>
            <span className="right floated">
              <button className="ui button"><i className="add icon"></i>Follow</button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}