'use strict'

import React from 'react'

var SubComponent = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired
	},
	getInitialState: function() {
    return {name: 'Consid', age: '15',
    	employees: [
    	{id: 0, name:'Robin'}, 
    	{id: 1, name:'Henrik'}, 
    	{id: 2, name:'Ulf'}]
    };
  },
  andraAlder: function(newAge) {
  	this.setState({age: newAge});
  },
  render: function() {
  	var employees = this.state.employees.map(function(employee){
  		return (
  			<li key={employee.id}>{employee.name}</li>
  		)
  	});

    return (
      <div>
      	<h2>{this.props.title}</h2>
      	<p>{this.props.text}</p>
      	<div>
      		<p>{this.state.name}</p>
      		<p>{this.state.age}</p>
      	</div>
      	<button onClick={this.andraAlder.bind(this, 55)}>Ändra texten</button>
      	<div>
      		<ul>
	      		{employees}
	      	</ul>
      	</div>
    	</div>
    );
  }
});

module.exports = SubComponent;