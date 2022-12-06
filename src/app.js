const express = require('express');
const { errorHandlerMiddleware } = require('./common/middlewares');
const testRouter = require('./test/testRouter');

const app = express();

app.use(express.json());
app.use(testRouter);
app.use(errorHandlerMiddleware);

module.exports = app;
