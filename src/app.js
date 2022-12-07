const express = require('express');
const cors = require('cors');
const { errorHandlerMiddleware } = require('./common/middlewares');
const photosRouter = require('./photos/photosRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(photosRouter);
app.use(errorHandlerMiddleware);

module.exports = app;
