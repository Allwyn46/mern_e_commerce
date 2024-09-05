const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Database Connected Successfully'))
    .catch((error) => console.error(error))

const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: process.env.FRONTEND,
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials: true,
    })
)

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => console.log(`server is now running ${PORT}`))
