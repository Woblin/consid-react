'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import ToDoConstants from '../constants/todoConstants';

let ToDoActions = {
	create: function(text) {
		AppDispatcher.dispatch({
			type: ToDoConstants.TODO_CREATE,
			payload: {text: text}
		});
	},
	destroy: function(id) {
		AppDispatcher.dispatch({
			type: ToDoConstants.TODO_DESTROY,
			payload: {id: id}
		});
	}
};

module.exports = ToDoActions;