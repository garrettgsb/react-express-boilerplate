import React, { useState, useContext } from 'react'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';
import { AddEventContext } from './AddEventContext.jsx'

const AddEvent = ({ onAdd }) => {

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());


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
      alert('Please add Meetup')
      return
    }

    // 
    onAdd({ name: locationName, date: moment(selectedDate).format("YYYY-MM-DD"), time: moment(selectedTime).format("HH:MM:SS")})
    eventCheck.setShowAddEvent(!eventCheck.showAddEvent)
    setLocationName('')
  }
  
  const eventCheck = useContext(AddEventContext)
  console.log('eventCheck', eventCheck)

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

      <input type='submit' value='Save Meetup' className='btn btn-block' />
    </form>
  )
}

export default AddEvent
