import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from '../components/Layout'
import LoginPage from '../components/LoginPage'
import Authenticate from '../utils/Authenticate'
import App from '../App'


export default () => (
		<Router history={ browserHistory }>
			<Route path="/" component={Layout}>
				<IndexRoute component={LoginPage} />
				<Route path="/app" component={Authenticate(App)}></Route>
			</Route>
		</Router>
	)