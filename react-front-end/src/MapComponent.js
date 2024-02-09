import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

import './styles/MapComponent.scss';
import 'leaflet/dist/leaflet.css';

const GasStationMap = ({ panToUser, setPanToUser }) => {
  const [map, setMap] = useState(null);
  const [gasStations, setGasStations] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

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
            </Marker>
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default GasStationMap;