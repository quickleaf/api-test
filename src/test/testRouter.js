const express = require('express');
const { asyncMiddleware } = require('../common/middlewares');
const testController = require('./testController');

const router = express.Router();

router.get('/test', asyncMiddleware(testController.test));

module.exports = router;
