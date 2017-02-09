import axios from 'axios'

// delete - deletes a prop from an obj
export default function setAuthorizationToken(token) {
	if(token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}