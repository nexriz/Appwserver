import axios from 'axios'
import setAuthorizationToken from '../../../utils/setAuthorizationToken'
import jwt from 'jwt-decode'
import { SET_CURRENT_USER } from './types'

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	}
}

export function login(data) {
	return dispatch => {
		return axios.post('http://localhost:8080/api/auth', data).then(res => {
			const token = res.data.token
			localStorage.setItem('jwtToken', token)
			setAuthorizationToken(token)
			dispatch(setCurrentUser(jwt(token)))
		})
	}
}
