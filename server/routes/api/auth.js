import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()


router.post('/', (req, res, next) => {
	const user = {
		name: req.body.username,
		permission: 'guest',
		ip: req.ip
	}

	var token = jwt.sign(user, 'test123')

	res.cookie('jwtToken', token)
	res.json({ token: token })
})



export default router;