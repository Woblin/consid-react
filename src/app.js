'use strict'

import React from 'react';
import { Link } from 'react-router'

const ACTIVE = {color: 'red'};

var App = React.createClass({
  render: function() {
  	let path = this.props.location.pathname;
    return (
      <div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <Link to="/" className="navbar-brand">Project name</Link>
		        </div>
		        <div id="navbar" className="collapse navbar-collapse">
		          <ul className="nav navbar-nav">
		            <li className={(path === '/')?'active':''}><Link to="/" >Home</Link></li>
		            <li className={(path === '/about')?'active':''}><Link to="/about">About</Link></li>
		            <li className={(path === '/todo')?'active':''}><Link to="/todo">ToDo</Link></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		    <div className="container" style={{padding: '40px 15px'}}>
		    	<div className="row">
        		{this.props.children}
        	</div>
		    </div>
    	</div>
    );
  }
});

module.exports = App;
