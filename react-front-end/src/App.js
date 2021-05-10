"use strict";
exports.__esModule = true;
// import axios from 'axios';
require("../styles/App.css");
var Home_1 = require("./components/Home");
var Categories_1 = require("./components/Categories");
var Entries_1 = require("./components/Entries");
var Navbar_1 = require("./components/Navbar");
var react_router_dom_1 = require("react-router-dom");
var App = function () {
    return (<div className="App">
      <h2>Advanced React</h2>

      {<react_router_dom_1.BrowserRouter>
        <Navbar_1["default"] />

        <react_router_dom_1.Switch>
          <react_router_dom_1.Route path="/Categories" component={Categories_1["default"]}/>
          <react_router_dom_1.Route path="/products" component={Entries_1["default"]}/>
          <react_router_dom_1.Route path="/">
            <Home_1["default"] message="hello there"/>
          </react_router_dom_1.Route>
        </react_router_dom_1.Switch>

      </react_router_dom_1.BrowserRouter>}
    </div>);
};
exports["default"] = App;
