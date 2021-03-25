import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from './LoginPage.js';
import HomePage from './HomePage.js';
import VideoCall from './VideoCall.js'
import LinkPage from './LinkPage';
import PictoChat from './WebChat.js'
import Games from './Games.js';
import CallDad from './CallDad.js';
import PictoDadChat from './PictoDadChat.js'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={LoginPage} />
				<Route path='/home' component={HomePage} />
				<Route path='/videocall' component={VideoCall} />
				<Route path='/calldad' component={CallDad} />
				<Route path='/webchat' component={PictoChat} />
				<Route path='/chat' component={PictoDadChat} />
				<Route path='/games' component={Games} />
				<Route path='/linkpage' component={LinkPage} />

			</Switch>
		</BrowserRouter>
	);
};

export default Routes;