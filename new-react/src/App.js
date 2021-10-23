import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Itinerary from "./pages/Itinerary";
import Itineraries from "./pages/Itineraries";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Map from "./pages/Map";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <Router login={login} setLogin={setLogin}>
      <div className="App">
        <Nav />
        <Layout>
          <Switch>
            <Route path="/login">
              <Login login={login} setLogin={setLogin} />
            </Route>
            <Route path="/register">
              <Login />
            </Route>
            <Route path="/itineraries">
              <Itineraries />
            </Route>
            <Route path="itinerary/:id/map">
              <Map />
            </Route>
            <Route path="itinerary/:id/chat">
              <Map />
            </Route>
            <Route path="/itinerary/:id">
              <Itinerary />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
