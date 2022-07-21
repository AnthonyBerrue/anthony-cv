const express = require('express');
const cache = require('../../helpers/cache');

// controller
const { websiteController } = require('../../controllers/website');

// error handling for controller
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router

    .route('/')
    /**
     * GET /portfolio
     * @summary Get portfolio
     * @tags portfolio
     * @return {[portfolio]} 200 - success response - application/json
     */
    .get(cache.route(), controllerHandler(websiteController.portfolio));
    
module.exports = router;
