import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

import './styles/MapComponent.scss';
import 'leaflet/dist/leaflet.css';

const GasStationMap = ({ panToUser, setPanToUser }) => {
  const [map, setMap] = useState(null);
  const [gasStations, setGasStations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [userPath, setUserPath] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const limeOptions = { color: 'lime' } //line formatting

  useEffect(() => {
    // Fetch gas station data from the backend API
    axios.get('/api/gas-stations')
      .then(response => setGasStations(response.data))
      .catch(error => console.error('Error fetching gas stations:', error));

    // Get user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setLoading(false); // Set loading to false once user location is obtained
        },
        error => {
          console.error('Error getting geolocation:', error);
          setLoading(false); // Set loading to false in case of an error
        }
      );
    }
  }, []);

  useEffect(() => {
    // Leaflet map initialization
    if (userLocation) {
      const leafletMap = L.map('map', {
        center: userLocation,
        zoom: 13,
      });

      // Add OpenStreetMap tiles to the map
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(leafletMap);

      //ADD DIRECTIONS
      //cheapest/closest gas stn from query REPLACE WITH SQL QUERY RESULT 
      let gasStn = {longitude:43.61555, latitude:-79.75910}
      //api key
      let tomtomKey = "wXVBX4FCpA4Bx6avVDjcG2GEZgvAo8SH"

      //(api GET) tested OK - returns expected json with distance, duration and polyline 
      let apiRouteQuery = `https://api.tomtom.com/routing/1/calculateRoute/${userLocation[0]}%2C${userLocation[1]}%3A${gasStn.longitude}%2C${gasStn.latitude}/json?maxAlternatives=0&routeRepresentation=polyline&computeTravelTimeFor=all&routeType=shortest&traffic=false&travelMode=car&key=${tomtomKey}`

      //move function outside of useEffect, declare on its own 
      async function fetchDirection (query) {
        const response = await fetch(query);//.href)
        if (!response.ok) {
          throw new Error(`Response not OK (Status code: ${response.status})`);
        } else {
          let polylineCoord = []; //let this be accessible outside of for loop so it can be passed out
          response.json().then(function(directionData) {  
            //grab the points needed to make line from json
            let polylinePts = directionData.routes["0"].legs["0"].points;
            
            for (let i = 0; i < polylinePts.length - 1; i++) {
              let coordinateB = new L.latLng(([polylinePts[i + 1].latitude, polylinePts[i + 1].longitude]));
              polylineCoord.push(coordinateB);
            }
            //console.log(polyline); //ok
            return polylineCoord;  //set that as a state
          }).then(()=> setUserPath(polylineCoord))
        }
      }

      //still invoke it here 
      fetchDirection(apiRouteQuery);
      
      // Set the map state
      setMap(leafletMap);
    }
  }, [userLocation]);

  useEffect(() => {
    // Update map center when userLocation changes
    if (map && userLocation) {
      map.setView(userLocation, map.getZoom());
      setPanToUser(false);
    }
  }, [map, userLocation, panToUser]);

  return (
    <div id="map" style={{ height: '750px', width: '750px', position: 'relative' }}>
      {loading && <div className="loading-screen">Loading...</div>} {/* Loading screen */}
      {!loading && map && (
        <MapContainer
          center={userLocation || [48.407326, -123.329773]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={30}
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* Render markers based on gas station data */}
          {gasStations.map(station => (
            <Marker
              key={station.id}
              position={[station.lat, station.lng]}
              icon={L.icon({
                iconUrl: '/marker1.png',
                iconSize: [25, 25],
                iconAnchor: [41, 41],
                popupAnchor: [1, -34],
                shadowSize: [45, 45],
              })}
            >
              <Popup>
                <div>
                  <h2>{station.name}</h2>
                  <p>Regular: ${station.regular_price}/L</p>
                  <p>Premium: ${station.premium_price}/L</p>
                  <p>Diesel: ${station.diesel_price}/L</p>
                  <p>Rating: {station.rating}</p>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Marker for user location */}
          {userLocation && (
            <Marker position={userLocation} icon={L.icon({
              iconUrl: '/user-marker.png', 
              iconSize: [25, 25],
              iconAnchor: [12, 12],
              popupAnchor: [0, -10],
            })}>
              <Popup>You are here!</Popup>
              <Polyline pathOptions={limeOptions} positions={userPath} />

            </Marker>
            
            
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default GasStationMap;