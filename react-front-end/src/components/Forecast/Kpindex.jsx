import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './forecast.scss';

const Kpindex = () => {
  
  const url = 'http://localhost:8080/api/data'
  const [aurora, setAurora] = useState()
  
  useEffect(() => {
    console.log("hello")
    axios.get(url)
    .then(response => {
      console.log("test", response.data)
      setAurora(response.data)
    })
  }, [])


  return (
  <div>
    {aurora && (<div className='kp-index'>
      <h3>3 day Aurora Forecast:</h3>
      <table className='table'>
        <thead>
          <tr>
            <th> Time (UTC) </th>
            <th> Time (MST) </th>
            <th> {aurora.day1.date} </th>
            <th> {aurora.day2.date} </th>
            <th> {aurora.day3.date} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 00:00 - 03:00 </td>
            <td> 18:00 - 21:00 </td>
            <td> {aurora.day1['00:00:00Z'].kpi}</td>
            <td> {aurora.day2['00:00:00Z'].kpi}</td>
            <td> {aurora.day3['00:00:00Z'].kpi}</td>
          </tr>
          <tr>
            <td> 03:00 - 06:00 </td>
            <td> 21:00 - 24:00 </td>
            <td> {aurora.day1['03:00:00Z'].kpi}</td>
            <td> {aurora.day2['03:00:00Z'].kpi}</td>
            <td> {aurora.day3['03:00:00Z'].kpi}</td>
          </tr>
          <tr>
            <td> 06:00 - 09:00 </td>
            <td> 00:00 - 03:00 </td>
            <td> {aurora.day1['06:00:00Z'].kpi}</td>
            <td> {aurora.day2['06:00:00Z'].kpi}</td>
            <td> {aurora.day3['06:00:00Z'].kpi}</td>
          </tr>
          <tr>
            <td> 09:00 - 12:00 </td>
            <td> 03:00 - 06:00 </td>
            <td> {aurora.day1['09:00:00Z'].kpi}</td>
            <td> {aurora.day2['09:00:00Z'].kpi}</td>
            <td> {aurora.day3['09:00:00Z'].kpi}</td>
          </tr>
          <tr>
            <td> 12:00 - 15:00 </td>
            <td> 06:00 - 09:00 </td>
            <td> {aurora.day1['12:00:00Z'].kpi}</td>
            <td> {aurora.day2['12:00:00Z'].kpi}</td>
            <td> {aurora.day3['12:00:00Z'].kpi}</td>
          </tr><tr>
            <td> 15:00 - 18:00 </td>
            <td> 09:00 - 12:00 </td>
            <td> {aurora.day1['15:00:00Z'].kpi}</td>
            <td> {aurora.day2['15:00:00Z'].kpi}</td>
            <td> {aurora.day3['15:00:00Z'].kpi}</td>
          </tr><tr>
            <td> 18:00 - 21:00 </td>
            <td> 12:00 - 15:00 </td>
            <td> {aurora.day1['18:00:00Z'].kpi}</td>
            <td> {aurora.day2['18:00:00Z'].kpi}</td>
            <td> {aurora.day3['18:00:00Z'].kpi}</td>
          </tr><tr>
            <td> 21:00 - 24:00 </td>
            <td> 15:00 - 18:00 </td>
            <td> {aurora.day1['21:00:00Z'].kpi}</td>
            <td> {aurora.day2['21:00:00Z'].kpi}</td>
            <td> {aurora.day3['21:00:00Z'].kpi}</td>
          </tr>
        </tbody>
      </table>
    </div>)}
  </div>
  )
}

export default Kpindex;
