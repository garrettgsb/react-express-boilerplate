import React, { useState, useContext } from 'react'
import { CheckedContext }from './CheckedContext.jsx'
import { MeetupsContext } from './MeetupsContext.jsx'
import { FaTimes } from 'react-icons/fa'
<<<<<<< HEAD
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';
=======
import FormControlLabel from '@material-ui/core/FormControlLabel'
>>>>>>> master

const Event = ({ event, onDelete }) => {
  const [ edit, setEdit ] = useState(false);

  const { checked, setChecked } = useContext(CheckedContext);
  const { meetup, setMeetup } = useContext(MeetupsContext);
  // const checked = true;
  // const contextCheck = useContext(CheckedContext)

  function setMeetupToEvent() {
    setMeetup(event)
  }

  function handleChange() {
    setChecked((prev) => !prev);
  }

  function handleEdit() {
    setEdit(!edit)
  }


  const [selectedDate, setSelectedDate] = React.useState();
  const [selectedTime, setSelectedTime] = React.useState();
  const [locationName, setLocationName] = useState('')

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(date);
  };

  const onEdit = (event) => {

    const id = event.id

    setEdit({ event })
    console.log('onEdit', event)
  }

  const onSubmit = (e) => {
    // don't want the form to submit to a page
    e.preventDefault()

    // show error message if field is missing
    if(!locationName) {
      alert('Please Edit Meetup')
      return
    }

    // 
    onEdit({ name: locationName, date: moment(selectedDate).format("YYYY-MM-DD"), time: moment(selectedTime).format("HH:MM:SS")})

    setLocationName('')
  }


  return (
    <div className='event'>
{!edit ?
(      <>
      <h3>
          <p onClick={() => {
          handleChange();
          setMeetupToEvent();}}>{event.name}</p>
        <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {onDelete(event.id); setMeetup('');}}/>
      </h3>
      <p>{event.date} at {event.time}</p>
      <button onClick={handleEdit} >Edit</button>
      </>)
:
      (  <>     <form className='add-form' onSubmit={ onSubmit, handleEdit } value={event}>
      <div className='form-control'>
      {/* May want to change Location input label to 'coordinates' or something else  */}
        <label>Location</label>
        <input 
        type='text' 
        placeholder='place event here'
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

      <input type='submit' value='Save Meetup' className='btn btn-block'  />
    </form> </>  )}
    </div>
  )
}

export default Event
