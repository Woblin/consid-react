'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var SubComponent = require('./SubComponent');

var Content = React.createClass({
	getInitialState: function() {
    return {title: 'Rubrik', text: 'Hej!'};
  },
  uppdateraTexten: function() {
  	this.setState({text: 'Banan!!!'});
  },
  render: function() {
    return (
      <div>
      	<b>Grattis</b>, Nu kan du börja koda med react, woop woop :-)
    		<SubComponent title={this.state.title} text={this.state.text} clickEvent={this.uppdateraTexten} />
    	</div>
    );
  }
});

ReactDOM.render(<Content />, document.getElementById('root'));
