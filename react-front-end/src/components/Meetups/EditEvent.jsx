import React, { useState } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';

const EditEvent = ({ onEdit }) => {

  const [selectedDate, setSelectedDate] = React.useState();
  const [selectedTime, setSelectedTime] = React.useState();


  const [locationName, setLocationName] = useState('')

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(date);
  };

  const onSubmit = (e) => {
    // don't want the form to submit to a page
    e.preventDefault()

    // show error message if field is missing
    if(!locationName) {
      alert('Please Edit Meetup')
      return
    }

    // 
    //onEdit({ name: locationName, date: moment(selectedDate).format("YYYY-MM-DD"), time: moment(selectedTime).format("HH:MM:SS")})

    setLocationName('')
  }
  onEdit()


  return (
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form-control'>
      {/* May want to change Location input label to 'coordinates' or something else  */}
        <label>Location</label>
        <input 
        type='text' 
        placeholder='Add Location'
        value={locationName}
        onChange = {(e) => setLocationName(e.target.value)} />
      </div>

      <div className='form-control'>
        <label>Date & Time</label>
          <MuiPickersUtilsProvider 
            utils={DateFnsUtils}
            onSubmit={handleDateChange}
            >
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
        
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
      </div>

      <input type='submit' value='Save Meetup' className='btn btn-block' onSubmit={onEdit} />
      <button className='btn btn-block' > Cancel </button>
    </form>
  )
}

export default EditEvent
