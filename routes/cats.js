const express = require('express');
const router = express.Router();
const catsController = require('../controllers/cats')

//Our routes dedicated to our cat requests will go here
//All routes defined in this router module are 'prefixed' with /cats in the endpoint
router.get('/', catsController.index)
router.get('/:id', catsController.show)

module.exports = router;
