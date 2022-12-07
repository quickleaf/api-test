const express = require('express');
const { asyncMiddleware } = require('../common/middlewares');
const photosController = require('./photosController');

const router = express.Router();

router.get('/photos', asyncMiddleware(photosController.getPhotos));

module.exports = router;
