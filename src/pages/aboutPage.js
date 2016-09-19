'use strict'

import React from 'react';

var About = React.createClass({
	getInitialState: function() {
    return {weatherData: []};
  },
  componentDidMount: function() {
    let josnUrl = 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/18.13/lat/59.16/data.json'; 
    this.serverRequest = $.get(josnUrl, function (result) {
      var forecasts = result.timeSeries.map(function(timeSeries){
        var obj = {
          time: timeSeries.validTime,
          parameters: {}
        };
        timeSeries.parameters.forEach(function(element, index, array){
          obj.parameters[element.name] = {unit: element.unit, value: element.values[0]}
        })
        return obj;
      });
      this.setState({
        weatherData: forecasts
      });
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    var weatherIconClass = ['', 
    'wi-day-sunny', //Clear sky
    'wi-day-cloudy', //Nearly clear sky
    'wi-cloud', //Variable cloudiness
    'wi-day-sunny-overcast', //Halfclear sky
    'wi-cloud', //Cloudy sky
    'wi-day-sunny-overcast', //Overcast
    'wi-day-fog', //Fog
    'wi-day-showers', //Rain showers
    'wi-day-thunderstorm', //Thunderstorm
    'wi-day-sleet', //Light sleet
    'wi-day-snow', //Snow showers
    'wi-day-rain', //Rain
    'wi-day-thunderstorm', //Thunder
    'wi-day-sleet', //Sleet
    'wi-day-snow' //Snowfall
    ];
    var weatherData = this.state.weatherData.map(function(weather) {
      return (
        <div className="weather-container" key={weather.time}>
          <div className="weather-icon">
            <i className={"wi "+weatherIconClass[weather.parameters.Wsymb.value]}></i>
          </div>
          <div className="weather-value">
            {weather.parameters.t.value}&deg; {weather.parameters.t.unit.substr(0,1)}
          </div>
          <div className="weather-time">
            <i>{weather.time.substring(11, 16)}</i> - <i>{weather.time.substring(0, 10)}</i>
          </div>
        </div>
      );
    });
    return (
      <div className="col-md-12">
      	<h1>About page</h1>
        <p>
        Jag hämtar väderdata från SMHI för <a href="http://www.smhi.se/#ws=wpt-a,proxy=wpt-a,geonameid=2673730" target="_blank">Stockholm</a>.
        </p>
        <p>
        Information om parametrar finns <a href="http://opendata.smhi.se/apidocs/metfcst/parameters.html" target="_blank">här</a>.
        </p>
      	
        {weatherData}
    	</div>
    );
  }
});

module.exports = About;