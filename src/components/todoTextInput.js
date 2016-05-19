import React from 'react';

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({

  propTypes: {
    id: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onSave: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  /**
   * @return {object}
   */
  render: function() /*object*/ {
    return (
    	<div className="form-group">
	      <input
	        className="form-control"
	        id={this.props.id}
	        placeholder={this.props.placeholder}
	        onBlur={this._save}
	        onChange={this._onChange}
	        onKeyDown={this._onKeyDown}
	        value={this.state.value}
	        autoFocus={true}
	      />
      </div>
    );
  },

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _save: function() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  /**
   * @param {object} event
   */
  _onChange: function(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  },

  /**
   * @param {object} event
   */

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

});

module.exports = TodoTextInput;