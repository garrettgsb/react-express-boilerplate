import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
import GenerateExercise from "./components/GenerateExercise";
import ExerciseList from "./components/ExerciseList";
import categoryData from "./components/testData/categoryData"

const App = () => {

  const [selectedCategories, setCategories] = useState([])

  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };

  const handleSelectCategory = (item) => {
    console.log("This is the item", item)
    setCategories(prev => ([...prev, item]))
    // add remove items
  }

  return (
    <>
      <NavBar />
      <div className="App">
        <button onClick={fetchData}>Fetch Data</button>
      </div>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <CategoryList data={categoryData} onClick={handleSelectCategory} selectedCategories={selectedCategories} />
            <Link to="/exercises">
              <GenerateExercise />
            </Link>
          </Route>
          <Route path="/exercises" component={ExerciseList} />
          <Route path="/workout" component={ExerciseList} />
        </Switch>
      </Router>
    </>
  );

}

export default App;
