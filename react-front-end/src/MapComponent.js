
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import axios from 'axios';

const MapComponent = () => {
  const [map, setMap] = useState(null);

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

    return () => {
      if (leafletMap) {
        leafletMap.remove();
      }
    };
  }, []);

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

  console.log(getRangeKM());

  return (
    <div id="map" style={{ width: '400px', height: '400px', borderRadius: '50%' }} />
  );
};

export default MapComponent;
