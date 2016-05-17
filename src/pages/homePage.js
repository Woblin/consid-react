'use strict';

import React from 'react';
import Input from '../components/textInput';

var Home = React.createClass({
	getInitialState: function() {
    return {
      selectedEmployee: 
      {id: null, firstName:'', lastName:''},
    	employees: [
    	{id: 0, firstName:'Robin', lastName:'Aulin'}, 
    	{id: 1, firstName:'Henrik', lastName:'Sandell'}, 
    	{id: 2, firstName:'Ulf', lastName:'Lindblad'}]
    };
  },
  componentWillMount: function() {
    console.log('Mounting Home page');
  },
  handleFirstname: function (event) {
    this.state.selectedEmployee.firstName = event.target.value;
    this.setState({selectedEmployee: this.state.selectedEmployee});
  },
  handleLastname: function (event) {
    this.state.selectedEmployee.lastName = event.target.value;
    this.setState({selectedEmployee: this.state.selectedEmployee});
  },
  saveEmployee: function(event) {
    event.preventDefault();
    this.state.selectedEmployee.id = new Date().getTime();
    this.state.employees.push(this.state.selectedEmployee);
    this.setState({employees: this.state.employees});
    this.setState({selectedEmployee: {id: null, firstName:'', lastName:''}});
  },
  render: function() {
  	var employees = this.state.employees.map(function(employee){
  		return (
  			<li key={employee.id}>{employee.firstName} {employee.lastName}</li>
  		)
  	});

    return (
      <div>
      	<h1>Employees</h1>
        <hr />
        <div>
      		<ul>
	      		{employees}
	      	</ul>
      	</div>
        <hr />
        <h4>Add new employee</h4>
        <Input
          name="firstName"
          label="First name"
          value={this.state.selectedEmployee.firstName}
          onChange={this.handleFirstname} />
        <Input 
          name="lastName"
          label="Last name"
          value={this.state.selectedEmployee.lastName}
          onChange={this.handleLastname} />
        <button className="btn btn-success"
          onClick={this.saveEmployee}>Add</button>
    	</div>
    );
  }
});

module.exports = Home;