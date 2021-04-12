import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import useSwr from "swr";
import axios from "axios";
import { features } from "./SFNeighborhoods-copy.json"
// import { features } from "./SSFZoning.json"
// import { features } from "./bayareacounties.json"


// const fetcher = (...args) => fetch(...args).then((response) => response.json());

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const icon = new Icon({
  iconUrl: "/building.png",
  iconSize: [25, 25],
});

function App() {

  // constructor(){
  //   super();

  //   this.getColor = (r) => {
  //     return r === 1 ? '#800020' : '#008080'
  //   }

  //   this.getColor = this.getColor.bind(this);
  //   this.mapStyle = (feature) => {
  //     return {
  //       fillColor: getColor(feature.properties.rating),
  //       weight: 1,
  //       color: "black",
  //     }
  //   };
  //   this.mapStyle = this.mapStyle.bind(this);
  // }

  
  const url = "https://data.sfgov.org/resource/ramy-di5m.json";
  const { data, error } = useSwr(url, { fetcher });
  const buildings = data && !error ? data.slice(0, 100) : [];

  const SFHoodData = features

  const countyData = features

  const SSFZoningData = features

  const onEachFeature = function(feature, layer) {
    if (feature.properties && feature.properties.name)
    layer.bindPopup(feature.properties.name) //How to add more content to the popup?!? Add component here?
  }

  const getColor = (r) => {
    return r === "1" ? 'red' : 
    r === "2" ? 'yellow' :
    r === "3" ? 'blue' :
    r === "4" ? 'green' :
    r === "5" ? 'orange' :
                'gray';
  }

  const mapStyle = (feature) => {
    return {
      fillColor: getColor(feature.properties.rating),
      weight: 0.5,
      color: "black",
    }
  };

  

  return (
    
    <MapContainer center={[37.70820204901914, -122.45808060394913]} zoom={12}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map((building) => (
        <Marker
          key={building.eas_fullid}
          position={[building.latitude, building.longitude]}
          icon={icon}
        >
          <Popup>
            <div>
              <h2>{building.address}</h2>
            </div>
          </Popup>
        </Marker>
      ))}

      <GeoJSON
        data={SFHoodData}
        style={mapStyle}
        onEachFeature={onEachFeature}
      />
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
