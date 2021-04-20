import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "./Geosearch.css";
import "./Map.css";

import { features } from "../../SFNeighborhoods-copy.json";
import Buildings from "../Buildings/Buildings";
import MapSearch from "./MapSearch";
import Legend from "./Legend";
import BuildingsByRating from "../Buildings/BuildingsByRating";

import Link from '@material-ui/core/Link';

function MainMap() {
  const [map, setMap] = useState(null);
  const neighbourhoodData = features;

  // const countyData = features

  const onEachFeature = function (feature, layer) {
    if (feature.properties && feature.properties.name)
      layer.bindPopup(
        "<strong>" + feature.properties.name + "</strong>" +
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
      ? "#d46c4e"
      : r === "2"
      ? "#f9ad6a"
      : r === "3"
      ? "#f9e07f"
      : r === "4"
      ? "#43978d"
      : r === "5"
      ? "#264d59"
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
        <BuildingsByRating buildingRating={5} />
      </div>
      <MapContainer
        className="map-left"
        center={[37.760895, -122.448207]}
        zoom={13}
        whenCreated={setMap}
      >
        {/* Toggle base map */}
        <LayersControl
          position="topleft"
          collapsed={false}
          className="filters-control"
        >
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
          <LayersControl.Overlay checked name="Areas Heatmap">
            <GeoJSON
              data={neighbourhoodData}
              style={mapStyle}
              onEachFeature={onEachFeature}
            />
          </LayersControl.Overlay>

          {/* Toggle building markers */}
          <LayersControl.Overlay name="5 Star Properties">
            <LayerGroup>
              <Buildings buildingRating={5} />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="4 Star Properties">
            <LayerGroup>
              <Buildings buildingRating={4} />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="3 Star Properties">
            <LayerGroup>
              <Buildings buildingRating={3} />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="2 Star Properties">
            <LayerGroup>
              <Buildings buildingRating={2} />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="1 Star Properties">
            <LayerGroup>
              <Buildings buildingRating={1} />
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="All Properties">
            <LayerGroup>
              <Buildings />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
        <MapSearch />
        <Legend map={map} />
      </MapContainer>
    </div>
  );
}

export default MainMap;
