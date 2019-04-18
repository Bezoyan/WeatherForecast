import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/layout/Landing';
import Forecast from './components/Forecast';
import CurrentDay from './components/CurrentDay';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Landing}/>
      </div>
      </Router>
    );
  }
}

export default App;
