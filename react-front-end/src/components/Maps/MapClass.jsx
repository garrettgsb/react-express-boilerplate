import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";

L.Icon.Default.imagePath='img/';

export default class MapClass extends Component {
  
  state = {
    location: {
      lat: 51.505,
      lng: -0.09,
    },
    haveUsersLocation: false,
    zoom: 2,
    markers: [[19.4100819, -99.1630388]]
  }

  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
     this.setState({
      location: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      zoom: 13,
      haveUsersLocation: true,
     });
     console.log(position);
    }, () => {
      console.log('cannot access location');
      fetch('https://ipapi.co/json')
        .then(res => res.json())
        .then(location => {
          this.setState({
            location: {
              lat: location.latitude,
              lng: location.longitude,
            },
            zoom: 20,
            haveUsersLocation: true,
          });
        })
    });
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng]
    return (
      <MapContainer 
        center={position} 
        zoom={this.state.zoom} 
        scrollWheelZoom={false}
        onClick={this.addMarker}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            <span>Popup</span>
          </Popup>
        </Marker>
        )}
        {this.state.haveUsersLocation ?
        <Marker position={position} zoom={this.state.zoom}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> : ''
        }
      </MapContainer>
    )
  }
}
