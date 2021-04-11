import React, { useState } from 'react'

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
    onAdd({ text: locationName, date, time })

    setLocationName('')
    setDate('')
    setTime('')
  }
  
  //May want to change Location input label to 'coordinates' or something else 
  return (
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form-control'>
        <label>Location</label>
        <input 
        type='text' 
        placeholder='Add Location'
        value={locationName}
        onChange = {(e) => setLocationName(e.target.value)} />
      </div>

      <div className='form-control'>
        <label>Date</label>
        <input 
        type='text' 
        placeholder='Add Date: yyyy-mm-dd'
        value={date}
        onChange = {(e) => setDate(e.target.value)} />
      </div>

      <div className='form-control'>
        <label>Time</label>
        <input 
        type='text' 
        placeholder='Add Time: 00:00:00'
        value={time}
        onChange = {(e) => setTime(e.target.value)} />
      </div>

      <input type='submit' value='Save Meetup' className='btn btn-block'/>
    </form>
  )
}

export default AddEvent
