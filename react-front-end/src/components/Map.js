import React from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  LayerGroup,
  Circle,
  FeatureGroup,
  Popup,
} from "react-leaflet";
import "./App.css";
import "./Geosearch.css";

import { features } from "../SFNeighborhoods-copy.json";
import Buildings from "./Buildings";
import MapSearch from "./MapSearch";
import Favourites from "./Favourites/Favourites";

function MainMap() {
  const neighbourhoodData = features;

  // const countyData = features

  const onEachFeature = function (feature, layer) {
    if (feature.properties && feature.properties.name)
      layer.bindPopup(
        feature.properties.name +
          "<br>" +
          "Area Rating: " +
          feature.properties.rating +
          "<br>" +
          "<a href=" +
          feature.properties.link +
          " target=" +
          "_blank>Area information</a>" +
          "<br>",
        { autoClose: true, closeOnClick: true }
      );
  };

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

  const mapStyle = (feature) => {
    return {
      fillColor: getColor(feature.properties.rating),
      fillOpacity: 0.5,
      weight: 0.5,
      color: "black",
    };
  };

  return (
    <div className="map-container">
      <div className="feature-buildings">
        <Favourites />
      </div>
      <MapContainer
        className="map-left"
        center={[37.75220204901914, -122.45808060394913]}
        zoom={13}
      >
        {/* Toggle base map */}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Areas Heatmap">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>

          {/* Toggle base map */}
          <LayersControl.BaseLayer name="Black and White">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          {/* Toggle base map */}
          <LayersControl.BaseLayer name="Dark Mode">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          {/* Toggle choropleth map */}
          <LayersControl.Overlay checked name="Show Choropleth">
            <GeoJSON
              data={neighbourhoodData}
              style={mapStyle}
              onEachFeature={onEachFeature}
            />
          </LayersControl.Overlay>

          {/* Toggle building markers */}
          <LayersControl.Overlay name="Properties">
            <LayerGroup>
              <Buildings />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Feature group">
            <FeatureGroup pathOptions={{ color: "purple" }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
            </FeatureGroup>
          </LayersControl.Overlay>

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
        <MapSearch />
      </MapContainer>
    </div>
  );
}

export default MainMap;
