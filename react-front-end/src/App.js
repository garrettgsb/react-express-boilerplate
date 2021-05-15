import React, { createContext } from "react";
import "./App.css";
import "@fontsource/roboto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import User from "./component/User";
import Artworks from "./component/Artworks";
import Artpiece from "./component/Artpiece";
import JobsList from "./component/JobsList";
import JobsListItem from "./component/JobsListItem";
import PrimarySearchAppBar from "./component/Navbar";
import Messenger from "./component/Messenger/Messenger";

import useApplicationData from "./hooks/useApplicationData";
import SearchResults from "./component/SearchResults";
import axios from "axios";

export const JobsContext = createContext([]);

export default function App() {
  const { state, setActiveUser } = useApplicationData();
  const [searchReturnValue, setSearchReturnValue] = React.useState({});

  const job = (
    <JobsContext.Provider value={state.jobs}>
      <JobsListItem activeUser={state.activeUser} />
    </JobsContext.Provider>
  );

  const filteredSearch = (queryString) => {
    axios.get(`/api/search?query=${queryString}`).then((response) => {
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
          <Route path="/messages/" render={() => <Messenger />} />
          <Route
            path="/portfolio/:id"
            render={() => <User activeUser={state.activeUser} />}
          />
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
