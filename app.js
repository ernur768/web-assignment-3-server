require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const router = require('./src/router')
const errorMiddleware = require('./src/middlware/error-middleware');

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/', router)
app.use(errorMiddleware)


const PORT = process.env.PORT || 5000;

const run = async () => {
    await mongoose.connect(process.env.MONGODB_URI)
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

run()