import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import jwt from 'jwt-decode'

import Routes from './routes'
import store from './components/redux/store'

import setAuthorizationToken from './utils/setAuthorizationToken'
import { setCurrentUser } from './components/redux/actions/authActions'

const token = localStorage.jwtToken
if(token) {
	setAuthorizationToken(token)
	store.dispatch(setCurrentUser(jwt(token)))
}

ReactDOM.render(
  <Provider store={store}><Routes /></Provider>,
  document.getElementById('root')
);
