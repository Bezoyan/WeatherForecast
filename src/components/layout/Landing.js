import React, {Component} from 'react';
import Day from '../Day';
import Forecast from '../Forecast';
import{Link} from 'react-router-dom';
import CurrentDay from '../CurrentDay';

class Landing extends Component {

  render() {
    return (
      <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">

          <div className="row">
            <div className="col-md-12 text-center">
<br/>
<br/>
              <CurrentDay/>
              <Forecast/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Landing;
