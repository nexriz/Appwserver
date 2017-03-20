import express from 'express'
import jwt from 'jsonwebtoken'
import { Map, List } from 'immutable'

const router = express.Router()


router.post('/', (req, res, next) => {
	const user = {
		name: req.body.username,
		permission: 'guest',
		ip: req.ip
	}

	var token = jwt.sign(user, process.env.SECRET)

	res.cookie('jwtToken', token)
	res.json({ token: token })
})

router.post('/signup', (req, res) => {
	const { name, password, email } = req.body
	const user = {
		name,
		email,
		password
	}
	const token = jwt.sign(user, process.env.SECRET)
	res.json({ token })
})



export default router;