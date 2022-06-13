const express = require('express');

// controller
const { websiteController } = require('../../controllers/website');

// error handling for controller
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router

    .route('/')
    /**
     * GET /portfolio
     * @summary Get portfolio
     * @tags portfolio
     * @return {[portfolio]} 200 - success response - application/json
     */
    .get(controllerHandler(websiteController.portfolio));
    
module.exports = router;
