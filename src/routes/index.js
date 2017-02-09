import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LayoutPage from '../components/LayoutPage'
import LoginPage from '../components/LoginPage'



export default () => (
		<Router history={ browserHistory }>
			<Route path="/" component={LayoutPage}>
			<IndexRoute component={LoginPage} />
			</Route>
		</Router>
	)