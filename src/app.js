'use strict'

import React from 'react';
import { Link } from 'react-router'

const ACTIVE = {color: 'red'};

var App = React.createClass({
  render: function() {
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
		            <li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>
		            <li><Link to="/about" activeClassName="active">About</Link></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		    <div className="container" style={{padding: '40px 15px'}}>
        	{this.props.children}
		    </div>
    	</div>
    );
  }
});

module.exports = App;
