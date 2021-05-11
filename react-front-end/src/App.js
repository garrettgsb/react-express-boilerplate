import React, { useEffect } from "react";
import "./App.css";
import "@fontsource/roboto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./component/User";
import Artworks from "./component/Artworks";
import Friends from "./component/Friends";
import Jobs from "./component/JobsList";
import Job from "./component/JobsListItem";
import PrimarySearchAppBar from "./component/Navbar";

import useApplicationData from "./hooks/useApplicationData";

export const JobsContext = React.createContext([]);

export default function App() {
  const { state, setActiveUser } = useApplicationData();

  const artworks = (
    <div>
      <Artworks art={state.artworks} />
    </div>
  );

  const jobBoard = (
    <div>
      <JobsContext.Provider value={state.jobs}>
        <Jobs />
      </JobsContext.Provider>
    </div>
  );

  const job = (
    <div>
      <JobsContext.Provider value={state.jobs}>
        <Job />
      </JobsContext.Provider>
    </div>
  );

  return (
    <div className="App">
      <Router>
        <div>
          {
            <PrimarySearchAppBar
              onLogin={setActiveUser}
              activeUser={state.activeUser}
            />
          }
        </div>

        <Switch>
          <Route
            path="/messages/"
            render={() => <Friends activeUser={state.activeUser} />}
          ></Route>
          <Route
            path="/portfolio/:id"
            children={<User activeUser={state.activeUser} />}
          ></Route>
          <Route path="/art_showcase" render={() => artworks}></Route>
          <Route path="/job_board" render={() => jobBoard}></Route>
          <Route path="/jobs/:id" render={() => job}></Route>
        </Switch>
      </Router>
    </div>
  );
}
