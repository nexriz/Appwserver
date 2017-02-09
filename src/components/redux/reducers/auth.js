import { SET_CURRENT_USER } from '../actions/types'

const initialState = {
	isAuth: false,
	user: {}
}

export default (state = initialState, action) => {
	switch(action.type) {
		case SET_CURRENT_USER: 
			return {
				isAuth: action.user !== {} ? true : false,
				user: action.user
			}
		default: return state
	}
}