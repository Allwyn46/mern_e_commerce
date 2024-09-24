const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();
const authRouter = require('./routes/auth/authRoutes');
const adminProductRouter = require('./routes/admin/productRoutes');

// CONNECTING DB
connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

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
);

app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);

app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductRouter);

app.listen(PORT, () => console.log(`server is now running ${PORT}`));
