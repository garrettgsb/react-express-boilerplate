import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import useSwr from "swr";
import axios from "axios";
import { features } from "../SFNeighborhoods-copy.json";
// import { features } from "./SSFZoning.json"
// import { features } from "./bayareacounties.json"

// const fetcher = (...args) => fetch(...args).then((response) => response.json());

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const icon = new Icon({
  iconUrl: "/building.png",
  iconSize: [25, 25],
});

export const groceriesIcon = new Icon({
  iconUrl: "/groceries.png",
  iconSize: [25, 25],
});

function Mapp() {
  const url = "https://data.sfgov.org/resource/ramy-di5m.json";
  const { data, error } = useSwr(url, { fetcher });
  const buildings = data && !error ? data.slice(0, 100) : [];

  const SFHoodData = features;

  // const countyData = features

  // const SSFZoningData = features

  const onEachFeature = function (feature, layer) {
    if (feature.properties && feature.properties.name)
      layer.bindPopup(feature.properties.name); //How to add more content to the popup?!? Add component here?
  };

  // r = rating
  const getColor = (r) => {
    return r === "1"
      ? "red"
      : r === "2"
      ? "yellow"
      : r === "3"
      ? "blue"
      : r === "4"
      ? "green"
      : r === "5"
      ? "orange"
      : "gray";
  };

  const mapStyle = (feature) => {
    return {
      fillColor: getColor(feature.properties.rating),
      weight: 0.5,
      color: "black",
    };
  };

  const amenities = [
    {
      id: 1,
      area_id: 1,
      name: "Potato Shop",
      type: "Groceries",
      image_url: null,
      longitude: -122.399165,
      latitude: 37.6204300000001,
    },
    {
      id: 2,
      area_id: 1,
      name: "Tomato Shop",
      type: "Groceries",
      image_url: null,
      longitude: -122.394391001,
      latitude: 37.786684017,
    },
    {
      id: 3,
      area_id: 1,
      name: "Ice Cream Shop",
      type: "Groceries",
      image_url: null,
      longitude: -122.416759954,
      latitude: 37.7795900350001,
    },
  ];

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

      {amenities.map((amenity) => (
        <Marker
          key={amenity.id}
          position={[amenity.latitude, amenity.longitude]}
          icon={groceriesIcon}
        >
          <Popup>
            <div>
              <h2>{amenity.name}</h2>
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

export default Mapp;
