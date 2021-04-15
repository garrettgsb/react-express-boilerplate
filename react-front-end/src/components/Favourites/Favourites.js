import React, { Component } from "react";
// import Buildings from "./../Buildings";

//component to render user favourites
class Favourites extends Component {
  state = { favourites: [] };

  componentDidMount() {
    fetch("/api/users/:id/favourites")
      .then((res) => res.json())
      .then((favourites) => this.setState({ favourites }));
  }

  render() {
    return (
      <div className="Favourites">
        <h1>Favourites</h1>
        <ul>
          {this.state.favourites.map((favourite) => (
            <li key={favourite.id}>
              <h2>{favourite.user_id}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Favourites;
