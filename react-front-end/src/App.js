import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./App.css";
import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

function App() {
  const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url, { fetcher });

  const crimes = data && !error ? data.slice(0, 100) : [];

  return (
    <MapContainer center={[52.6376, -1.135171]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {crimes.map((crime) => (
        <Marker
          key={crime.id}
          position={[crime.location.latitude, crime.location.longitude]}
        />
      ))}
    </MapContainer>
  );
}
// constructor(props) {
//   super(props);
//   this.state = {
//     message: "Click the button to load data!",
//   };
// }

// fetchData = () => {
//   axios
//     .get("/api/data") // You can simply make your requests to "/api/whatever you want"
//     .then((response) => {
//       // handle success
//       console.log(response.data); // The entire response from the Rails API

//       console.log(response.data.message); // Just the message
//       this.setState({
//         message: response.data.message,
//       });
//     });
// };

// render() {
//   return (
//     <div className="App">
//       <h1>{this.state.message}</h1>
//       <button onClick={this.fetchData}>Fetch Data</button>
//     </div>
//   );
// }

export default App;
