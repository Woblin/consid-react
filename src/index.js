'use strict'

import css from './css/main.scss';

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, 
	browserHistory, IndexRoute } from 'react-router';

import App from './app';
import Home from './pages/homePage';
import About from './pages/aboutPage';

var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
		</Route>
	</Router>
);


render(routes, document.getElementById('app'));