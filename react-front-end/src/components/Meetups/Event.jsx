import React, { useState, useContext } from 'react'
import { CheckedContext }from './CheckedContext.jsx'
import { MeetupsContext } from '../../MeetupsContext.jsx'
import { FaTimes } from 'react-icons/fa'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  } from '@material-ui/pickers';
import moment from 'moment';

const Event = ({ event, onDelete }) => {
  const [ edit, setEdit ] = useState(false);
  
  const [ currentEvent, setCurrentEvent ] = useState({ ...event })

  const { checked, setChecked } = useContext(CheckedContext);
  const { meetup, setMeetup } = useContext(MeetupsContext);

  function setMeetupToEvent() {
    setMeetup(currentEvent)
  }

  function handleChange() {
    setChecked((prev) => !prev);
  }

  function handleEdit() {
    setEdit(!edit)
  }

  const [currentDate, setCurrentDate] = React.useState(Date());
  const [currentTime, setCurrentTime] = React.useState(Date());
  const [currentName, setCurrentName] = useState(currentEvent.name)

  const handleDateChange = (date) => {
    setCurrentDate(date);
    setCurrentTime(date);
  };

  const onSubmit = (e) => {
    // don't want the form to submit to a page
    e.preventDefault()

    // show error message if field is missing
    if(!currentName) {
      alert('Please Edit Meetup')
      return
    }

    // 
    setCurrentEvent({ id: event.id, name: currentName, date: moment(currentDate).format("YYYY-MM-DD"), time: moment(currentTime).format("HH:MM:SS")})
    console.log('current event', currentEvent)
    setCurrentName('')
  }

  return (
    <div className='event'>
    {!edit ?
      (<>
        <h3>
          <p onClick={() => {
          handleChange();
          setMeetupToEvent();}}>{currentEvent.name}</p>
          <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {onDelete(event.id); setMeetup('');}}/>
        </h3>
        <p>{currentEvent.date} at {currentEvent.time}</p>
        <button type="button" className='btn' onClick={handleEdit} >Edit</button>
        </>)
      :
        (<>
          <form className='add-form' onSubmit={onSubmit} value={currentEvent}>
            <div className='form-control'>
            {/* May want to change Location input label to 'coordinates' or something else  */}
              <label>Location</label>
              <input 
              type='text' 
              placeholder='place event here'
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)} />
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
                      onChange={handleDateChange}
                      value={currentDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />

                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Time"
                      onChange={handleDateChange}
                      value={currentTime}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
            </div>
                    
            <button type='submit' value='Save Meetup' className='btn btn-block' />
            <button type='button' className='btn' onClick={handleEdit} >Save Meetup</button>
          </form> 
        </>)}
    </div>
  )
}

export default Event
