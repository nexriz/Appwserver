import express from 'express'
import jwt from 'jsonwebtoken'
import eJWT from 'express-jwt'
import { AuthUserToken } from '../JWTprotectionMiddleware'

const router = express.Router()

router.get('/', (req, res, next) => {
	const token = req.headers.token,
		token_verified = jwt.verify(token, 'test123', (err, decoded) => {
			if(err) console.log(err);
		})

	res.json({ 
		message: 'UserApi',
		token: token_verified
	})
	res.end()
})


router.post('/create', AuthUserToken, (req, res, next) => {
	res.json({ 
		test: '123',
	})
})



export default router;