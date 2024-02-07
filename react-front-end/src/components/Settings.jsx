import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';

const Setting = () => {
  const [notification, setNotification] = useState('on'); // Default 'on'
  const [distanceUnit, setDistanceUnit] = useState('miles'); // Default 'miles'
  const [preciseLocation, setPreciseLocation] = useState('on'); // Default 'on'
  const backendURL = 'http://localhost:8080'; // Define your backend URL

  useEffect(() => {
    axios.get(`${backendURL}/api/settings`)
      .then(response => {
        const { notification, distanceUnit, preciseLocation } = response.data;
        setNotification(notification);
        setDistanceUnit(distanceUnit);
        setPreciseLocation(preciseLocation);
      })
      .catch(error => {
        console.error('Failed to fetch settings:', error);
      });
  }, [backendURL]);

  const updateSetting = (settingType, value) => {
    axios.post(`${backendURL}/api/settings/${settingType}`, { [settingType]: value })
      .then(() => console.log(`${settingType} setting updated.`))
      .catch(error => console.error(`Failed to update ${settingType} setting:`, error));
  };

  const handleNotificationChange = (event) => {
    const newValue = event.target.value;
    setNotification(newValue);
    updateSetting('notification', newValue);
  };

  const handleDistanceUnitChange = (event) => {
    const newValue = event.target.value;
    setDistanceUnit(newValue);
    updateSetting('distanceUnit', newValue);
  };

  const handlePreciseLocationChange = (event) => {
    const newValue = event.target.value;
    setPreciseLocation(newValue);
    updateSetting('preciseLocation', newValue);
  };

  const handleClearHistory = () => {
    axios.post(`${backendURL}/api/history/clear`)
      .then(() => alert('Search history cleared!'))
      .catch(error => console.error('Failed to clear search history:', error));
  };

  const handleRemoveFavorites = () => {
    axios.post(`${backendURL}/api/favorites/removeAll`)
      .then(() => alert('All favorites removed!'))
      .catch(error => console.error('Failed to remove all favorites:', error));
  };

  return (
    <div>
      <h2>Settings</h2>
      <FormControl fullWidth margin="normal">
        <InputLabel id="notification-label">Notification</InputLabel>
        <Select
          labelId="notification-label"
          id="notification"
          value={notification}
          onChange={handleNotificationChange}
        >
          <MenuItem value="on">On</MenuItem>
          <MenuItem value="off">Off</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="distanceUnit-label">Distance Unit</InputLabel>
        <Select
          labelId="distanceUnit-label"
          id="distanceUnit"
          value={distanceUnit}
          onChange={handleDistanceUnitChange}
        >
          <MenuItem value="miles">Miles</MenuItem>
          <MenuItem value="kilometers">Kilometers</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="preciseLocation-label">Precise Location</InputLabel>
        <Select
          labelId="preciseLocation-label"
          id="preciseLocation"
          value={preciseLocation}
          onChange={handlePreciseLocationChange}
        >
          <MenuItem value="on">On</MenuItem>
          <MenuItem value="off">Off</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleClearHistory} style={{ marginRight: '10px' }}>
        Clear Search History
      </Button>
      <Button variant="contained" color="secondary" onClick={handleRemoveFavorites}>
        Remove All Favorites
      </Button>
    </div>
  );
};

export default Setting;
