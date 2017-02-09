import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()


router.get('/', (req, res, next) => {
	if(req.headers.user) {
		const user = {
		user: req.headers.user,
		date: new Date(),
		permission: 'guest',
		ip: req.ip
		}
		var token = jwt.sign(user, 'test123', { expiresIn: 1 })
		res.set({
			Authorization: 'Bearer ' + token
		})
	}


	res.json({
		request_header: req.headers,
		response_header: res.headers,
		message: 'AuthApi',
		body: req.body, 
		random: Math.random().toString(34).slice(2),
		token: token ? token : ''

	})
})



export default router;