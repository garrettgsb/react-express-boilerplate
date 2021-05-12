import React, { useEffect, createContext, useState } from "react";
import "./App.css";
import "@fontsource/roboto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./component/User";
import Artworks from "./component/Artworks";
import Friends from "./component/Friends";
import JobsList from "./component/JobsList";
import JobsListItem from "./component/JobsListItem";
import PrimarySearchAppBar from "./component/Navbar";
import FormJobs from "./component/FormJobs";
import Empty from "./component/Empty";
import MyJobsList from "./component/MyJobsList";

import useApplicationData from "./hooks/useApplicationData";

export const JobsContext = createContext([]);
export const ArtWorksContext = createContext([]);

export default function App() {
  const { state, setActiveUser } = useApplicationData();
  const [show, setShow] = useState(false);
  const NO_ACTIVE_USER = 0;

  const jobForm = () => {
    setShow(true);
  };

  const artworks = (
    <div>
      <Artworks art={state.artworks} />
    </div>
  );

  const jobBoard = (
    <JobsList>
      <br />

      {state.activeUser !== NO_ACTIVE_USER && !show && (
        <Empty onAdd={jobForm} />
      )}
      {state.activeUser !== NO_ACTIVE_USER && show && <FormJobs />}
    </JobsList>
  );

  const job = (
    <JobsContext.Provider value={state.jobs}>
      <JobsListItem />
    </JobsContext.Provider>
  );

  return (
    <div className="App">
      <Router>
        <PrimarySearchAppBar
          onLogin={setActiveUser}
          activeUser={state.activeUser}
        />
        <Switch>
          <Route
            path="/messages/"
            render={() => <Friends activeUser={state.activeUser} />}
          />
          <Route
            path="/portfolio/:id"
            render={() => <User activeUser={state.activeUser} />}
          />
          <Route
            path="/job_board"
            activeUser={state.activeUser}
            render={() => jobBoard}
          />
          <Route path="/jobs/:id" render={() => job} />
          <Route
            path="/myJobs"
            render={() => (
              <MyJobsList jobs={state.jobs} activeUser={state.activeUser} />
            )}
          />
          <Route path="/" exact render={() => artworks} />
        </Switch>
      </Router>
    </div>
  );
}
