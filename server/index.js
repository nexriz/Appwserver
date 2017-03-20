process.env.SECRET = 'test123'

import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors';

import routesApi from './routes/api'


const PORT = 8080
const app = express()



// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.resolve(__dirname, '..', 'static')))


// Routes
app.use('/api', routesApi)


app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'static', 'index.html'))
})	



app.listen(PORT, () => console.log('Listening on port 8080!'))