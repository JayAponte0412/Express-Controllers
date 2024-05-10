const express = require('express');
const router = express.Router();
const dogsController = require('../controllers/dogs')

//Our routes dedicated to our cat requests will go here
//All routes defined in this router module are 'prefixed' with /cats in the endpoint

router.get('/', dogsController.index)
router.get('/:id', dogsController.show)

module.exports = router;