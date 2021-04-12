import React, { useState } from 'react'
import MaterialUIPickers from './dateTimePicker.jsx'

const AddEvent = ({ onAdd }) => {

  const [locationName, setLocationName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const onSubmit = (e) => {
    // don't want the form to submit to a page
    e.preventDefault()

    // show error message if field is missing
    if(!locationName) {
      alert('Please add Meetup')
      return
    }

    // 
    onAdd({ name: locationName, date, time })

    setLocationName('')
    setDate('')
    setTime('')
  }
  
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
        <MaterialUIPickers onChange = {(e) => setDate({})} />
        
      </div>

      <input type='submit' value='Save Meetup' className='btn btn-block'/>
    </form>
  )
}

export default AddEvent
