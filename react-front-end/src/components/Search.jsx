import React, { useReducer, useState } from 'react';
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Extend action types
const actionTypes = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_FUEL_TYPE: 'SET_FUEL_TYPE',
  SET_PAYMENT_METHOD: 'SET_PAYMENT_METHOD',
  SET_STATION_BRAND: 'SET_STATION_BRAND',
  SET_PRICE_UPDATE_LIMIT: 'SET_PRICE_UPDATE_LIMIT',
};

// Extend reducer function
const settingsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case actionTypes.SET_FUEL_TYPE:
      return { ...state, fuelType: action.payload };
    case actionTypes.SET_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case actionTypes.SET_STATION_BRAND:
      return { ...state, stationBrand: action.payload };
    case actionTypes.SET_PRICE_UPDATE_LIMIT:
      return { ...state, priceUpdateLimit: action.payload };
    default:
      return state;
  }
};

// Define custom marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Setting = () => {
  const initialState = {
    searchQuery: '',
    fuelType: 'Regular',
    paymentMethod: 'Cash or Credit',
    stationBrand: 'All Station Brands',
    priceUpdateLimit: 'No Limit',
  };

  const [state, dispatch] = useReducer(settingsReducer, initialState);
  const [gasStations, setGasStations] = useState([]);

  // Handler functions for new search inputs
  const handleSearchInputChange = (event) => {
    dispatch({ type: actionTypes.SET_SEARCH_QUERY, payload: event.target.value });
  };

  const handleFuelTypeChange = (event) => {
    dispatch({ type: actionTypes.SET_FUEL_TYPE, payload: event.target.value });
  };

  const handlePaymentMethodChange = (event) => {
    dispatch({ type: actionTypes.SET_PAYMENT_METHOD, payload: event.target.value });
  };

  const handleStationBrandChange = (event) => {
    dispatch({ type: actionTypes.SET_STATION_BRAND, payload: event.target.value });
  };

  const handlePriceUpdateLimitChange = (event) => {
    dispatch({ type: actionTypes.SET_PRICE_UPDATE_LIMIT, payload: event.target.value });
  };

  // Simulated fetchGasPrices function
  const fetchGasPrices = () => {
    console.log('Fetching gas prices with criteria:', state.searchQuery, state.fuelType, state.paymentMethod, state.stationBrand, state.priceUpdateLimit);
    // Simulated data for gas stations, replace with actual API call
    const fetchedGasStations = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: `Gas Station ${index + 1}`,
      address: `${Math.floor(Math.random() * 1000) + 1} Elm St, ${index % 2 === 0 ? 'Toronto' : 'Vancouver'}, Canada`,
      lat: 49.2827 + (Math.random() * 10 - 5), // Random latitude across Canada
      lng: -123.1207 + (Math.random() * 10 - 5), // Random longitude across Canada
    }));
    setGasStations(fetchedGasStations);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}> {/* Added maxWidth and margin auto */}
      <h2>Search Gas Prices</h2>

      <TextField
        fullWidth
        label="Search by city or postal code"
        variant="outlined"
        value={state.searchQuery}
        onChange={handleSearchInputChange}
        style={{ marginBottom: '20px' }}
      />

      <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
        <InputLabel>Fuel Type</InputLabel>
        <Select
          value={state.fuelType}
          onChange={handleFuelTypeChange}
          label="Fuel Type"
        >
          <MenuItem value="Regular">Regular</MenuItem>
          <MenuItem value="Premium">Premium</MenuItem>
          <MenuItem value="Diesel">Diesel</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
        <InputLabel>Payment Method</InputLabel>
        <Select
          value={state.paymentMethod}
          onChange={handlePaymentMethodChange}
          label="Payment Method"
        >
          <MenuItem value="Cash">Cash</MenuItem>
          <MenuItem value="Credit">Credit</MenuItem>
          <MenuItem value="Cash or Credit">Cash or Credit</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
        <InputLabel>Station Brand</InputLabel>
        <Select
          value={state.stationBrand}
          onChange={handleStationBrandChange}
          label="Station Brand"
        >
          <MenuItem value="All Station Brands">All Station Brands</MenuItem>
          <MenuItem value="Shell">Shell</MenuItem>
          <MenuItem value="Exxon">Exxon</MenuItem>
          <MenuItem value="BP">BP</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
        <InputLabel>Prices updated in the last</InputLabel>
        <Select
          value={state.priceUpdateLimit}
          onChange={handlePriceUpdateLimitChange}
          label="Prices updated in the last"
        >
          <MenuItem value="No Limit">No Limit</MenuItem>
          <MenuItem value="1 hour">1 hour</MenuItem>
          <MenuItem value="3 hours">3 hours</MenuItem>
          <MenuItem value="6 hours">6 hours</MenuItem>
          <MenuItem value="12 hours">12 hours</MenuItem>
          <MenuItem value="24 hours">24 hours</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={fetchGasPrices}>
        FIND GAS
      </Button>

      <div style={{ height: '400px', width: '100%', marginTop: '20px' }}>
        <MapContainer center={[49.2827, -123.1207]} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {gasStations.map(station => (
            <Marker position={[station.lat, station.lng]} icon={redIcon} key={station.id}>
              <Popup>
                {station.name}<br />
                {station.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Setting;
