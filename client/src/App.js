import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Identify from './containers/Identify/Identify'
import Desk from './containers/Desk/Desk'
import Resume from './containers/Resume/Resume'

function App() {

	/*
	Routes to all the pages and a redirect to route if "404 No page found"
	*/

	return (
		<div className={"App"}>
			<Switch>
				<Route path={"/"} component={Identify} exact />
				<Route path={"/game"} component={Desk} exact />
				<Route path={"/resume"} component={Resume} exact />
				<Redirect from={"*"} to={"/"} />
			</Switch>
		</div>
	);
}

export default App;
