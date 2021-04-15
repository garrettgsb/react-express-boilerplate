import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imports
import Nav from "./Nav";
import Map from "./Map";
import AmenMap from "./AmenMap";
import Home from "./Home";
import About from "./About";
import Buildings from "./Buildings";
import Building from "./Building";
import BuildingAmenities from "./BuildingAmenities";
import Favourites from "./Favourites/Favourites";
import FavouriteButton from "./Favourites/FavouriteButton";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
          <Route path="/buildings/:buildingId" component={Building} />
          <Route path="/buildings" component={Buildings} />
          <Route path="/:id/building_amenities" component={BuildingAmenities} />
          <Route path="/:id/favourites" component={Favourites} />
          <Route path="/favouriteButton" component={FavouriteButton} />
        </Switch>
      </div>
    </Router>
  );
}
