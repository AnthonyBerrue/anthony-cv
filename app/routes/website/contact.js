const express = require('express');

// controller
const { websiteController } = require('../../controllers/website');

// error handling for controller
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router

    .route('/')
    /**
     * GET /contact
     * @summary Get contact
     * @tags contact
     * @return {[contact]} 200 - success response - application/json
     */
    .get(controllerHandler(websiteController.contact));
    
module.exports = router;
