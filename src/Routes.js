import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './HomePage.js';
import LinkPage from './LinkPage';
import WebChat from './WebChat.js'
import Games from './Games.js';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/webchat' component={WebChat} />
				<Route path='/games' component={Games} />
				<Route path='/linkpage' component={LinkPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;