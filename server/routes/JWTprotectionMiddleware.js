import jwt from 'jsonwebtoken'


export function AuthUserToken(req, res, next) {
	if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		let token = req.headers.authorization.split(' ')[1]
		console.log(token)
		jwt.verify(token, 'test123', (err) => {
			if(err) {
				res.status(201).send('Authorization not valid')
			} else {
				req.decodedToken = jwt.decode(token)
				console.log('Authorization granted')
				next();
			}
		})

	} else {
		res.status('404').send('Authorization denied');
		res.end()
	}
}