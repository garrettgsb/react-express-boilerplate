import React from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  LayerGroup,
  Circle,
  Marker,
  FeatureGroup,
  Popup,
  Rectangle,
} from "react-leaflet";
// import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch'
import "./App.css";
import "./Geosearch.css";
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
      ? "#e76f51"
      : r === "2"
      ? "#f4a261"
      : r === "3"
      ? "#e9c46a"
      : r === "4"
      ? "#2a9d8f"
      : r === "5"
      ? "#264653"
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

  const center = [37.75220204901914, -122.45808060394913];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  return (
    <MapContainer center={[37.75220204901914, -122.45808060394913]} zoom={12}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Areas">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Black and White">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Dark Mode">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={center}>
            <Buildings />
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle
              center={center}
              pathOptions={{ fillColor: "blue" }}
              radius={200}
            />
            <Circle
              center={center}
              pathOptions={{ fillColor: "red" }}
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={[51.51, -0.08]}
                pathOptions={{ color: "green", fillColor: "green" }}
                radius={100}
              />
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          <FeatureGroup pathOptions={{ color: "purple" }}>
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={[51.51, -0.06]} radius={200} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
        </LayersControl.Overlay>

        <GeoJSON
          data={SFHoodData}
          style={mapStyle}
          onEachFeature={onEachFeature}
        />

        {/* <GeoSearchControlElement
          provider={prov}
          showMarker={true}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Enter address, please"}
          keepResult={true}
      /> */}
      </LayersControl>
    </MapContainer>
  );
}

export default MainMap;
