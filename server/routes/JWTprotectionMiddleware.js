import jwt from 'jsonwebtoken'


export function AuthUserToken(req, res, next) {
	if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		let token = req.headers.authorization.split(' ')[1]
		jwt.verify(token, process.env.SECRET_KEY, (err) => {
			if(err) {
				res.status(201).send('Authorization not valid')
			} else {
				console.log('Authorization access, granted')
				next()
			}
		})

	} else {
		res.status('404').send('Authorization access, denied');
		res.end()
	}
}