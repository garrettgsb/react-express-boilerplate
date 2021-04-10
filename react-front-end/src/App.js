import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export const icon = new Icon({
  iconUrl: "/building.png",
  iconSize: [25, 25],
});

function App() {
  const [activeBuilding, setActiveBuilding] = React.useState(null);
  const url = "https://data.sfgov.org/resource/ramy-di5m.json";
  const { data, error } = useSwr(url, { fetcher });
  const buildings = data && !error ? data.slice(0, 100) : [];

  return (
    <MapContainer center={[37.70820204901914, -122.45808060394913]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map((building) => (
        <Marker
          key={building.eas_fullid}
          position={[building.latitude, building.longitude]}
          onClick={() => {
            setActiveBuilding(building);
          }}
          icon={icon}
        />
      ))}

      {activeBuilding && (
        <Popup
          position={[activeBuilding.latitude, activeBuilding.longitude]}
          onClose={() => {
            setActiveBuilding(null);
          }}
        >
          <div>
            <h2>{activeBuilding.address}</h2>
            <p>{activeBuilding.zip_code}</p>
          </div>
        </Popup>
      )}
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
