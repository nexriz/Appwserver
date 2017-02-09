import express from 'express'

import AuthApi from './AuthApi'
import UserApi from './UserApi'

const router = express.Router()

router.use('/user', UserApi)
router.use('/auth', AuthApi)

router.all('/', (req, res, next) => {
	res.json({ message: 'available api routes', user: '/user', auth: '/auth'})
	res.end()
})



export default router;