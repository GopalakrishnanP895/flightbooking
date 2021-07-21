const express = require('express');
//model
const { getFlightList } = require('../models/flightModel.js');

//initialize a router
const router  = express.Router();

//routes
router.get('/search', getFlightList);

module.exports = router;