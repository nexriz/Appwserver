import express from 'express'

import auth from './auth'
import user from './user'

const router = express.Router()

router.use('/user', user)
router.use('/auth', auth)

router.all('/', (req, res, next) => {
	res.json({ message: 'available api routes', user: '/user', auth: '/auth'})
	res.end()
})



export default router;