import express from 'express'

import morgan from 'morgan'


const PORT = 8080
const app = express()



// middleware
app.use(morgan('dev'))


// Routes

app.get('/*', (req, res) => {
	res.send('hello')
})



app.listen(PORT, () => console.log('Listening on port 8080!'))