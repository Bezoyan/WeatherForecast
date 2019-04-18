import React from 'react';
import  moment from 'moment';
import Forecast from './Forecast';

const Day = ({list}) => {

  let newDate = new Date();
    const weekday = list.dt * 1000;
    newDate.setTime(weekday);

  const imgURL = `http://openweathermap.org/img/w/${list.weather[0].icon}.png`
  return (
    <div className="col-sm-2">

      <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-light">{moment(newDate).format('MMMM Do')}</p>
        <h2> {Math.round(list.main.temp_min)} °C</h2>
        <h2> {Math.round(list.main.temp_max)} °C</h2>


      <img src={imgURL}/>
    </div>

  )
}

export default Day;
