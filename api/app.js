const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://e-baron.github.io'],
};

const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');
const questionsRouter = require('./routes/questions');
const statisticsRouter = require('./routes/statistics');
const categoriesRouter = require('./routes/categories');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/auths', authsRouter);
app.use('/questions', questionsRouter);
app.use('/statistics', statisticsRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
