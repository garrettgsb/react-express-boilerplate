import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "./App.css";
import { Icon } from "leaflet";
import { features } from "../SFNeighborhoods-copy.json";
import Buildings from "./Buildings";
// import { features } from "./SSFZoning.json"
// import { features } from "./bayareacounties.json"

// const fetcher = (...args) => fetch(...args).then((response) => response.json());

// const fetcher = (url) => axios.get(url).then((res) => res.datva);

// export const icon = new Icon({
//   iconUrl: "/building.png",
//   iconSize: [25, 25],
// });

export const groceriesIcon = new Icon({
  iconUrl: "/groceries.png",
  iconSize: [25, 25],
});

function MainMap() {
  // const url = "https://data.sfgov.org/resource/ramy-di5m.json";
  // const { data, error } = useSwr(url, { fetcher });
  // const buildings = data && !error ? data.slice(0, 100) : [];

  const SFHoodData = features;

  // const countyData = features

  // const SSFZoningData = features

  const onEachFeature = function (feature, layer) {
    if (feature.properties && feature.properties.name)
      layer.bindPopup(feature.properties.name); //How to add more content to the popup?!? Add component here?
  };

  // const rating = [
  //   {
  //     area_name: "Lake Street",
  //     average_area_rating: "4"
  //   },
  //   {
  //     area_name: "Seacliff",
  //     average_area_rating: "3"
  //   }
  // ]

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

  // Y u no work?
  // const ratings = [
  //   {
  //   area_name: "Lake Street",
  //   average_area_rating: "4"
  //   },
  //   {
  //   area_name: "Seacliff",
  //   average_area_rating: "3"
  //   }
  // ]

  const mapStyle = (feature) => {
    return {
      fillColor: getColor(feature.properties.rating),
      weight: 0.5,
      color: "black",
    };
  };

  return (
    <MapContainer center={[37.75220204901914, -122.45808060394913]} zoom={12}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Buildings />

      <GeoJSON
        data={SFHoodData}
        style={mapStyle}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
}

export default MainMap;
