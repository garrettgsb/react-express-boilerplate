import React, { createContext } from "react";
import "./App.css";
import "@fontsource/roboto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./component/User";
import Artworks from "./component/Artworks";
import Artpiece from "./component/Artpiece";
import Friends from "./component/Friends";
import JobsList from "./component/JobsList";
import JobsListItem from "./component/JobsListItem";
import PrimarySearchAppBar from "./component/Navbar";
import SearchPage from "./component/SearchPage";

import useApplicationData from "./hooks/useApplicationData";

export const JobsContext = createContext([]);

export default function App() {
  const { state, setActiveUser } = useApplicationData();

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
          {/* <Route path="/search" render={() => <SearchPage />} /> */}
          <Route path="/job_board" render={() => <JobsList />} />
          <Route path="/jobs/:id" render={() => job} />
          <Route path="/artpiece/:id" render={() => <Artpiece />} />
          {/* <Route path="/user/:id/jobs" render={() => job} /> */}
          <Route
            path="/"
            exact
            render={() => <Artworks art={state.artworks} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
