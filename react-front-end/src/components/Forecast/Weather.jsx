import React from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

export default function Weather() {
  return (
    <div className='weather'>
      <span><h3>Daily Weather Forecast</h3></span>
      <div className='spacer' />
      <div id='items'>
        <div id='items-1'>
          <WbCloudyIcon style={{ fontSize: 80 }}/>
          <br/> <h4 style={{ color: '#fff' }}>80% cloud cover</h4>
        </div>
        <div id='items-2'>
          <AcUnitIcon style={{ fontSize: 80 }}/>
          <br/> <h4 style={{ color: '#fff' }}>70% light snow</h4>
        </div>
        <div id='items-2'>
          <TrendingDownIcon style={{ fontSize: 80 }}/>
          <br/> <h4 style={{ color: '#fff' }}>-4°C</h4>
        </div>
        <div id='items-4'>
          <Brightness2Icon style={{ fontSize: 80 }}/>
            <br/> <h4 style={{ color: '#fff' }}>first quarter moon</h4>
        </div>
      </div>
    </div>
  )
}