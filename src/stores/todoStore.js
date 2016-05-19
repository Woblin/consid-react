'use strict'

import AppDispatcher from '../dispatcher/AppDispatcher';
import {ToDoActions} from '../actions/todoActions';
import ToDoConstants from '../constants/todoConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';
let CHANGE_EVENT = 'change';

//privat variabel
let _todos = {};

//private funktioner: create och destroy
function create(text) {
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  _todos[id] = {
    id: id,
    complete: false,//använder inte i detta exemplet
    text: text
  };
}

function destroy(id) {
  delete _todos[id];
}

let ToDoStore = assign({}, EventEmitter.prototype, {
	// Dessa tre funktioner finns i alla Stores: addChangeListener, removeChangeListener, emitChange
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	//Specifika för ToDoStore
	getAll: function() {
		return _todos;
	}
});

//Logiken baserat på action typ
AppDispatcher.register(function(action) {
	switch(action.type) {
		case ToDoConstants.TODO_CREATE: {
			let text = action.payload.text.trim();//ta bort whitespace
      if (text !== '') {//vi lägger bara till texten om den inte är en tom sträng
        create(text);//Lägger till en todo i listan
        ToDoStore.emitChange();//Berättar att vi har gjort en förändring
      }
			break;
		}
		case ToDoConstants.TODO_DESTROY: {
			destroy(action.payload.id);//Plockar bort en todo från listan
			ToDoStore.emitChange();//Berättar att vi har gjort en förändring
			break;
		}
	}
});

module.exports = ToDoStore;