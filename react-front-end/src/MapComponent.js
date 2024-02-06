<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

import './styles/MapComponent.scss';
import 'leaflet/dist/leaflet.css';

const GasStationMap = () => {
  const [map, setMap] = useState(null);
  const [gasStations, setGasStations] = useState([]);
=======

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import axios from 'axios';

const MapComponent = () => {
  const [map, setMap] = useState(null);
>>>>>>> 4823c8b (queries)

  useEffect(() => {
    // Leaflet map initialization
    const leafletMap = L.map('map', {
      center: [48.407326, -123.329773],
      zoom: 13,
    });

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(leafletMap);

    // Set the map state
    setMap(leafletMap);

<<<<<<< HEAD
    // Fetch gas station data from the backend API
    axios.get('/api/gasStation')
      .then(response => setGasStations(response.data))
      .catch(error => console.error('Error fetching gas stations:', error));

=======
>>>>>>> 4823c8b (queries)
    return () => {
      if (leafletMap) {
        leafletMap.remove();
      }
    };
  }, []);

<<<<<<< HEAD
=======
  useEffect(() => {
    if (map) {
      // Fetch data from the backend and add markers to the map
      axios.get('/api/gas-stations') 
        .then(response => {
          const data = response.data;
          data.forEach(row => {
            const marker = L.marker([row.lat, row.lng])
              .addTo(map)
              .bindPopup(`${row.name} <br> $${row.rating}/L`);
            marker.openPopup();
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [map]);

>>>>>>> 4823c8b (queries)
  const getRangeKM = () => {
    if (map) {
      const bounds = map.getBounds();
      const width = map.distance(bounds.getNorthWest(), bounds.getNorthEast()) / 1000;
      const height = map.distance(bounds.getNorthWest(), bounds.getSouthWest()) / 1000;

      return {
        width,
        height,
      };
    }
    return null;
  };

<<<<<<< HEAD
  return (
    <div id="map" style={{ height: '500px', width: '100%' }}>
      {map && (
        <MapContainer
          center={[48.407326, -123.329773]}
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
                iconUrl: 'path/to/your/custom-marker-icon.png', // this should be replaced with an icons as marker are not displaying on the map
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41],
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
        </MapContainer>
      )}


      {getRangeKM && console.log(getRangeKM())}
    </div>
  );
};

export default GasStationMap;
=======
  console.log(getRangeKM());

  return (
    <div id="map" style={{ width: '400px', height: '400px', borderRadius: '50%' }} />
  );
};

export default MapComponent;
>>>>>>> 4823c8b (queries)
