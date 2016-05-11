var React = require('react');
var ReactDOM = require('react-dom');

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