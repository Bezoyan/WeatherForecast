import React, { Component } from 'react';
import axios from 'axios';
import Day from './Day';
import CurrentDay from './CurrentDay';
const api_key = "0ec36925af9454dd9f3bf2b5781d1b6a";

class Forecast extends Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = () => {
    const city = "Yerevan";
    const url ="http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&APPID=";

    axios.get(url + api_key )
    .then(res => {
       // console.log(res.data);
       const  data = res.data;
       const dailyData = data.list.filter(list => list.dt_txt.includes("18:00:00"));
     this.setState({
       fullData: data,
       dailyData: dailyData
     });
   })
   .catch(error => {
       console.log(error);
     });


  }

  formatDayCards = () => {
    return this.state.dailyData.map((list, index) => <Day list={list} key={index} />);
  };


  render() {
    return (
      <div className="container">
      <h5 className="display-4 text-light">Weather forecast</h5>
      <br/>
        <div className="row justify-content-center">
          {this.formatDayCards()}
        </div>
      </div>
    )
  }
}

export default Forecast;
