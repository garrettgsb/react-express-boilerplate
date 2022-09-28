/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Run from "./Run";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import "../styles/profile.css";
import { useLoaderData } from "react-router-dom";
import { userState,runnerRunsState, plannerRunsState } from "../hooks/useAppData";
import { useRecoilValue } from "recoil";

export default function Profile() {
  const user = useRecoilValue(userState);
  const runnerRuns = useRecoilValue(runnerRunsState);
  const plannerRuns = useRecoilValue(plannerRunsState);
  // const { runnerRuns, plannerRuns } = useLoaderData();
  const [runData, setRunData] = useState({ distance: 0, minutes: 0, count: 0 });

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

  useEffect(() => {
    let distance = 0,
      minutes = 0,
      count = 0;
    for (const key in runnerRuns) {
      if (runnerRuns[key].future_run === false) {
        distance += parseInt(runnerRuns[key].distance);
        minutes += parseInt(runnerRuns[key].time);
        count += 1;
      }
    }
    setRunData({ distance, minutes, count });
  }, []);

  return (
    <main className="profile-section">
      <section className="profile-header">
        <div className="profile-info">
          <div className="profile-welcome">
            <h1>Welcome!</h1>
            {user && <p>{user.name}</p>}
          </div>
          <h4>YOU HAVE:</h4>
          <Table size="sm">
            <thead>
              <tr>
                <th>RUN FOR</th>
                <th>COVERED</th>
                <th>ATTENDED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {runData.minutes}
                  <span className="unit">min</span>
                </td>
                <td>
                  {runData.distance}
                  <span className="unit">km</span>
                </td>
                <td>
                  {runData.count}
                  <span className="unit">runs</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        {profilePicture}
      </section>

      <section className="profile-stats">
        <Tabs
          defaultActiveKey="attended"
          id="profile-tab"
          className="mb-3"
          fill
        >
          <Tab eventKey="attended" title="Attended">
            {runnerRuns && showRunnersRuns(runnerRuns, "attended")}
          </Tab>
          <Tab eventKey="planned" title="Planned">
            {plannerRuns && showRunnersRuns(plannerRuns, "planned")}
          </Tab>
        </Tabs>
      </section>
    </main>
  );
}
