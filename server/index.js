import express from 'express'

const PORT = 3000
const app = express()

app.get('/*', (req, res) => {
	res.send('hello')
})

app.listen(PORT, () => console.log('Listening on port 3000!'))