import L from 'leaflet';

const MapMarkers = ({ map, data }) => {
  for (let i in data) {
    const row = data[i];
    const marker = L.marker([row.lat, row.lng], {
      opacity: 1,
    })
      .addTo(map)
      .bindPopup(`${row.name} <br> $${row.rating}/L`);
    marker.openPopup();
  }
};

export default MapMarkers;
