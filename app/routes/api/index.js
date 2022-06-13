const express = require('express');

// we get all the API controllers
const { apiController } = require('../../controllers/api');

// we retrieve all the routes

// error handling function
const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

// API default route, here we configure it for all methods
router.all('/', apiController.homePage);

// We prefix the API routers


router.use(() => {
    throw new ApiError(404, 'API Route not found');
});

module.exports = router;
