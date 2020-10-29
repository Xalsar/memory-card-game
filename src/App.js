import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Identify from './containers/Identify/Identify'
import Desk from './containers/Desk/Desk'
import Resume from './containers/Resume/Resume'

function App() {

	return (
		<div className={"App"}>
			<Switch>
				<Route path={"/"} component={Identify} exact />
				<Route path={"/game"} component={Desk} exact />
				<Route path={"/resume"} component={Resume} exact />
			</Switch>
		</div>
	);
}

export default App;
