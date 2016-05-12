var React = require('react');
var ReactDOM = require('react-dom');
//var bootstrapCss = require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
var css = require('./css/main.css');

var Content = React.createClass({
  render: function() {
    return (
      <div>
      	<b>Grattis</b>, Nu kan du börja koda med react, woop woop :-)
    	</div>
    );
  }
});

ReactDOM.render(<Content />, document.getElementById('root'));