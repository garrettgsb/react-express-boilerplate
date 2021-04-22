import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Map from './Map'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));


export default function Form({ setPhotoSpots }) {

  const classes = useStyles();
  
  const [location, setLocation] = useState({
    location_name: "Calgary",
    province: "Alberta",
    latitude: "51.041735628202574",
    longitude: "-114.0800948826548",
    photo_url: "",
    photo_credit: ""
    // location_name: "",
    // province: "",
    // latitude: "",
    // longitude: "",
    // photo_url: "",
    // photo_credit: ""
  })

//  TODO: form validation
  function saveLocation (event) {
    // prevent form from sending the post request & so we can do it with axios instead
    event.preventDefault();
    axios.post(`http://localhost:8080/maps`, { location })
    .then(({ data }) => setPhotoSpots(data))
    .then(() => setLocation({
      location_name: "",
      province: "",
      latitude: "",
      longitude: "",
      photo_url: "",
      photo_credit: ""
    }))
    .then(() => <Map />)
    .catch(err => console.error(err))
  }


  return (
    <form className='map-form' onSubmit={saveLocation}>
      <div className='map-form-text'>
      <h2> Recommend a Location </h2>
        <p>Share your favourite Northern Lights photography spots with our community.</p>
        <br />
      </div>
       <TextField
          required
          id="outlined-full-width"
          label="Location Name"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={location.location_name}
          variant="outlined"
          onChange={e => setLocation({ ...location, location_name: e.target.value})}
        />
        <br />
        <TextField
          required
          id="outlined-full-width"
          label="Province or Territory"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={location.province}
          variant="outlined"
          onChange={e => setLocation({ ...location, province: e.target.value})}

        />
        <br />
        <TextField
          required
          id="outlined-full-width"
          label="Latitude"
          style={{ margin: 8 }}
          helperText="ex. 51.055649"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={location.latitude}
          variant="outlined"
          onChange={e => setLocation({ ...location, latitude: e.target.value})}

        />
        <br />
        <TextField
          required
          id="outlined-full-width"
          label="Longitude"
          style={{ margin: 8 }}
          helperText="ex. -114.071641"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={location.longitude}
          variant="outlined"
          onChange={e => setLocation({ ...location, longitude: e.target.value})}

        />
        <br />
        <TextField
          id="outlined-full-width"
          label="Photo (optional)"
          style={{ margin: 8 }}
          helperText="please provide direct URL to photo"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={location.photo_url}
          variant="outlined"
          onChange={e => setLocation({ ...location, photo_url: e.target.value})}

        />
        <br />
        <TextField
          id="outlined-full-width"
          label="Photographer (optional)"
          style={{ margin: 8 }}
          helperText="who took the photo from the provided URL?"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={location.photo_credit}
          variant="outlined"
          onChange={e => setLocation({ ...location, photo_credit: e.target.value})}

        />
        <button type="submit" value="Submit" className='btn'> Submit </button>
    </form>
  )
}