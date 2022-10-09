/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Run from "./Run";
import EmptyRuns from "./EmptyRuns";
import ProfileActions from "./ProfileActions";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import "../styles/profile.css";
import {
  userState,
  runnerRunsState,
  plannerRunsState,
} from "../hooks/useAppData";
import { useRecoilValue } from "recoil";
import useAppData from "../hooks/useAppData";
import profilePhoto from './profile-photo.jpeg';
import PlannerShow from './PlannerShow.jsx';
import { Button } from "bootstrap";

export default function Profile() {
  const user = useRecoilValue(userState);
  const runnerRuns = useRecoilValue(runnerRunsState);
  const plannerRuns = useRecoilValue(plannerRunsState);
  const { joinRun, canJoinRun } = useAppData();
  const [runData, setRunData] = useState({ distance: 0, minutes: 0, count: 0 });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showRunnersRuns = (runs, type) => {
    const runsArray = Object.values(runs);
    if (runsArray.length === 0) return <EmptyRuns type={type} />;
    return runsArray.map((run) => (
      <Run
        key={run.id}
        run={run}
        type={type}
        join={joinRun}
        canJoinRun={canJoinRun}
      />
    ));
  };

  const profilePicture = (
    <img
      className="profile-pic"
      src={profilePhoto}
      //src="https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
  }, [runnerRuns]);

  return (
    <main className="profile-section">
      <section className="profile-header">
        <div className="profile-info">
          <div className="profile-welcome">
            <div>
              <h1>Welcome!</h1>
              {user && <p>{user.name}</p>}
            </div>
            <ProfileActions />
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
            <section className="runs-tab">
              {runnerRuns && showRunnersRuns(runnerRuns, "attended")}
            </section>
          </Tab>
          <Tab eventKey="planned" title="Planned">
            <section className="runs-tab">
              {plannerRuns && showRunnersRuns(plannerRuns, "planned")}
            </section>
          </Tab>
        </Tabs>
      </section>
      {/* <PlannerShow show={show} handleClose={handleClose} handleShow={handleShow}/> */}
    </main>
  );
}
