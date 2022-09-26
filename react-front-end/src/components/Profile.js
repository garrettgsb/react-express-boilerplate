/* eslint-disable no-unused-vars */
import React from "react";
import Run from "./Run";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../styles/Profile.css";

export default function Profile(props) {
  const { runnerRuns, plannerRuns, user } = props;

  const showRunnersRuns = (runs, type) => {
    const runsArray = Object.values(runs);
    return runsArray.map((run) => <Run key={run.id} run={run} type={type} />);
  };

  const profilePicture = (
    <img
      className="profile-pic"
      src="https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg"
      // src="https://cdn-icons-png.flaticon.com/512/2335/2335153.png"
      alt="icon-profile"
    ></img>
  );

  return (
    <main className="profile-section">
      <section className="profile-header">
        <div className="profile-info">
          <h1>Welcome!</h1>
          <p>{user.name}</p>
          <ul>
            <li>Age: {user.age}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
          </ul>
        </div>
        {profilePicture}
      </section>

      <section className="profile-stats">
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="Attended">
            {showRunnersRuns(runnerRuns, "attended")}
          </Tab>
          <Tab eventKey="profile" title="Planned">
            {showRunnersRuns(plannerRuns, "planned")}
          </Tab>
        </Tabs>
      </section>
    </main>
  );
}
