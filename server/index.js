import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import routesApi from './routes/api'

import config from './config/config'

const PORT = 8080
const app = express()



// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))


// Routes
app.use('/api', routesApi)


app.get('/*', (req, res) => {
	res.send('hello')
})



app.listen(PORT, () => console.log('Listening on port 8080!'))