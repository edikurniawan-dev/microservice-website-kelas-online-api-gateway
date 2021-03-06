require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const coursesRouter = require('./routes/courses');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const usersRouter = require('./routes/users');
const refreshTokensRouter = require('./routes/refreshTokens');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', verifyToken, coursesRouter);
app.use('/media', mediaRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/refresh-tokens', refreshTokensRouter);

module.exports = app;
