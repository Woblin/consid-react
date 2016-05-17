'use strict'

import React from 'react';

var About = React.createClass({
	getInitialState: function() {
    return {weatherData: []};
  },
  componentDidMount: function() {
    let josnUrl = 'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/59.16/lon/18.13/data.json'; 
    this.serverRequest = $.get(josnUrl, function (result) {
      this.setState({
        weatherData: result.timeseries
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    var weatherData = this.state.weatherData.map(function(weather) {
      return (
        <div key={weather.validTime}>
          <b>{weather.t}</b> grader kl <i>{weather.validTime}</i>
        </div>
      );
    });
    return (
      <div>
      	<h1>About page</h1>
        <p>
        Jag hämtar väderdata från SMHI för <a href="http://www.smhi.se/#ws=wpt-a,proxy=wpt-a,geonameid=2673730">Stockholm</a>
        </p>
      	
        {weatherData}
    	</div>
    );
  }
});

module.exports = About;