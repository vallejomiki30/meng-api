import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
const port = process.env.PORT || 9000
import jokeRoutes from './routes/jokeRoutes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/api/jokes', jokeRoutes)

app.get('/', (req,res) => res.send('Server is running.'))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Started on port ${port}`))
