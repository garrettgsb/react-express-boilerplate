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
import Chat from "./pages/Chat";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <div className="App">
        <Nav login={login} setLogin={setLogin} />
        <Layout>
          <Switch>
            <Route path="/login">
              <Login login={login} setLogin={setLogin} />
            </Route>
            <Route path="/register">
              <Login login={login} setLogin={setLogin} />
            </Route>
            <Route path="/itineraries">
              <Itineraries login={login} />
            </Route>
            <Route path="itinerary/:id/map">
              <Map login={login} />
            </Route>
            <Route path="itinerary/:id/chat">
              <Chat login={login} />
            </Route>
            <Route path="/itinerary/:id">
              <Itinerary login={login} />
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
