import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import useSwr from "swr";
import axios from "axios";
import { features } from "./SFNeighborhoods.json"


// const fetcher = (...args) => fetch(...args).then((response) => response.json());

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const icon = new Icon({
  iconUrl: "/building.png",
  iconSize: [25, 25],
});

function App() {
  const url = "https://data.sfgov.org/resource/ramy-di5m.json";
  const { data, error } = useSwr(url, { fetcher });
  const buildings = data && !error ? data.slice(0, 100) : [];

  const hoodData = features
    console.log("MEOWWW")
    console.log(hoodData)

  const testJSON = {
    "type": "FeatureCollection", //refers to features
    "crs": { 
      "type": "name",
      "properties": {
        "name": "urn:ogc:def:crs:OGC:1.3:CRS84" //crs is some coordinates reference system. maybe won't need this?
      }
    },
    "features": [{ //JSON array of the feature collection defined above
      "type": "Feature",
      "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!",
        "show_on_map": true
  
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.49345526799993,
              37.78351817100008
              ],
              [
              -122.49372649999992,
              37.78724665100009
              ],
              [
              -122.49358666699993,
              37.78731259500006
              ],
              [
              -122.49360569399994,
              37.78752774600008
              ],
              [
              -122.49283007399993,
              37.787882585000034
              ],
              [
              -122.4927566799999,
              37.78773917700005
              ],
              [
              -122.48982906399993,
              37.789482184000065
              ],
              [
              -122.48899105699991,
              37.78928318700008
              ],
              [
              -122.4878640209999,
              37.78958817900008
              ],
              [
              -122.48736904899994,
              37.78942984100007
              ],
              [
              -122.48598032899991,
              37.79080370600008
              ],
              [
              -122.48581537399991,
              37.79070384600004
              ],
              [
              -122.48557750799989,
              37.790559847000054
              ],
              [
              -122.4850531269999,
              37.79036813300007
              ],
              [
              -122.4842660519999,
              37.789411709000035
              ],
              [
              -122.48407706799992,
              37.78939909400009
              ],
              [
              -122.4838230019999,
              37.78928250300004
              ],
              [
              -122.48370738599994,
              37.788776950000056
              ],
              [
              -122.4839269609999,
              37.788315201000046
              ],
              [
              -122.4839504329999,
              37.78802775100007
              ],
              [
              -122.48414271299993,
              37.78777522900009
              ],
              [
              -122.4841506649999,
              37.787554653000086
              ],
              [
              -122.48463982999994,
              37.78753212700008
              ],
              [
              -122.48464285299991,
              37.787378785000044
              ],
              [
              -122.48431022499994,
              37.78735203400004
              ],
              [
              -122.4841736059999,
              37.78731086500005
              ],
              [
              -122.48407980499991,
              37.78579452900004
              ],
              [
              -122.48728636499993,
              37.78564884000008
              ],
              [
              -122.48715071499993,
              37.783785427000055
              ],
              [
              -122.49345526799993,
              37.78351817100008
              ]
          ]
        ]
      }
    }]
  }

  const mapStyle = {
    weight: 1,
    color: "black",
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
        data={hoodData}
        style={mapStyle}
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
