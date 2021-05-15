import React from 'react';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import WeatherItem from './WeatherItem';
import './Weather.scss';
import { useState, useEffect } from "react";

const lat = 49.2497;
const lon = -123.1193;
// const cityId = 6173331;
const apiKey = 'f2970ccf10fb5df7afd096a5f96ab733';
// const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`;
const weatherUrlCF = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={hourly}&appid=${apiKey}`

export default function Weather() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      await axios.get(weatherUrlCF)
        .then((response) => {
          console.log(response);
          setWeatherData(response.data.daily);
        });
    }
    fetchWeather();
  }, [])

  const getAlerts = function () {
    let alerts = '';
    let frost = 0;
    let heat = 0;
    let rain = 0;
  
    for (const day of weatherData) {
      if (day.temp.min <= 273.15) frost++;
      if (day.temp.max >= 305.37) heat++;
      if (day.rain) rain = rain + day.rain;
    }
    
    let alert1;
    let alert2;
    let alert3;

    if (frost > 0) {
      alert1 = <div className="alert frost"><span>warning: </span>Frost Warning</div>;
    }
    if (heat > 0) {
      alert2 = <div className="alert-heat"><span>warning: </span>High Heat Warning. Early morning watering recommended.</div>;
    }
    if (rain > 13) {
      alert3 = <div className="alert-rain"><span>warning: </span>More than 13mm of rain expected.</div>;
    }
    return (<div>{alert1}{alert2}{alert3}</div>);
  }
  
  return (
    <main>
      <Card className="root">
        <section>
          <h2>Vancouver, CA</h2>
          <div>{getAlerts()}</div>
          <div className="row">
            {weatherData.map(w => (
              <WeatherItem classname="centerCard"
                key={w.weather[0].id}
                description={w.weather[0].description}
                icon={w.weather[0].icon}
                tempMin={w.temp.min}
                tempMax={w.temp.max}
                dte={w.dt}
              />
            ))}
          </div>
        </section>
      </Card>
    </main>
  )
}