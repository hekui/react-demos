import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import ShowInput from './modules/ShowInput'


render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path="/repos" component={Repos} />
   			<Route path="/about" component={About} />
   			<Route path="/about/:username/:repos" component={ShowInput} />
   		</Route>
	</Router>,
	document.getElementById("root")
)