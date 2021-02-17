import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.scss'


const StoreMap = (props) => {
  return(
  <MapContainer center={[props.lat, props.lon]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[props.lat, props.lon]}>
      <Popup>
        {props.name} <br/>
        {props.address}
      </Popup>
    </Marker>
  </MapContainer>
  )
};

export default StoreMap;
