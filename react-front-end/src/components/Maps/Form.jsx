import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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


export default function Form() {

  const classes = useStyles();
  
  const [location, setLocation] = useState({
    location_name: "",
    province: "",
    latitude: "",
    longitude: "",
    photo_url: "",
    photo_credit: ""
  })

  function saveLocation () {
    axios.post(`http://localhost:8080/maps`, { location })
    .then(() => console.log('test#2 from react side'))
    .catch(err => console.log(err))
  }


  return (
    <div className='map-form'>
      <div className='map-form-text'>
      <h2> Recommend a Location </h2>
        <br />
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
        {/* <button type="submit" className='btn' onClick={handleSubmit}> Submit </button> */}
        <button type="submit" className='btn' onClick={saveLocation}> Submit </button>
    </div>
  )
}

// location_name VARCHAR(255) NOT NULL,
//   province VARCHAR(255) NOT NULL,
//   latitude VARCHAR(255) NOT NULL,
//   longitude VARCHAR(255) NOT NULL,
//   photo_url TEXT,
//   photo_credit VARCHAR(255)