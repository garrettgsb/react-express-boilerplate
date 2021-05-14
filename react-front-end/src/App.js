import React, { createContext, useState } from "react";
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

import useApplicationData from "./hooks/useApplicationData";
import SearchResults from "./component/SearchResults";
import axios from "axios";

export const JobsContext = createContext([]);

export default function App() {
  const { state, setActiveUser } = useApplicationData();
  const [searchReturnValue, setSearchReturnValue] = React.useState({});

  const job = (
    <JobsContext.Provider value={state.jobs}>
      <JobsListItem />
    </JobsContext.Provider>
  );

  const filteredSearch = (queryString) => {
    console.log("queryString = ", queryString);
    axios.get(`/api/search?query=${queryString}`).then((response) => {
      console.log("Art?", response.data.artworks);
      console.log("Users?", response.data.users);
      console.log("Jobs?", response.data.jobs);
      setSearchReturnValue(response.data);
      localStorage.setItem("search_results", JSON.stringify(response.data));
    });
  };

  return (
    <div className="App">
      <Router>
        <PrimarySearchAppBar
          onLogin={setActiveUser}
          activeUser={state.activeUser}
          filteredSearch={filteredSearch}
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
          <Route
            path="/searchResults"
            render={() => (
              <SearchResults searchReturnValue={searchReturnValue} />
            )}
          />
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
