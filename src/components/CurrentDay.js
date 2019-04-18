import React, { Component } from 'react';
import axios from 'axios';
// import {getCurrentWeather} from '../utils/openWeather';

const api_key = "0ec36925af9454dd9f3bf2b5781d1b6a";


class CurrentDay extends Component {
  constructor (props) {
    super(props);
    this.state = {
    city:  '',
    currentDate: '',
    currentWeatherDesc: '',
    currentTemp: '',
    currentWeatherIcon: '',
    }
  }

componentDidMount = () => {
   const city = "Yerevan";
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=";

     axios.get(url + api_key )
     .then(res => {

console.log(res.data);
        const wData = {
          currentWeatherDesc: res.data.weather[0].description,
          currentWeatherIcon: res.data.weather[0].icon,
          currentTemp: res.data.main.temp,
          city: res.data.name
        }
        this.setState ({
          currentWeatherDesc: wData.currentWeatherDesc,
          currentWeatherIcon: wData.currentWeatherIcon,
          currentTemp: wData.currentTemp,
          city: wData.city
        });
     })
     .catch(error => {
       console.log(error);
     });

   }
  render() {
    return (
      <div className="row justify-content-center">
      <div className="col-sm-8">
          <h1>{this.state.city.toUpperCase()}</h1>
          <h3>{this.state.currentTemp} °C</h3>
          <h3>{this.state.currentWeatherDesc.toUpperCase()}</h3>
          <img className="col-md-3"src={`http://openweathermap.org/img/w/${this.state.currentWeatherIcon}.png`}/>
      </div>
      </div>
  );
}

}



export default CurrentDay;
