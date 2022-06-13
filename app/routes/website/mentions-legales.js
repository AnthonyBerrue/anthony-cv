const express = require('express');

// controller
const { websiteController } = require('../../controllers/website');

// error handling for controller
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router

    .route('/')
    /**
     * GET /mentions-legales
     * @summary Get mentions-legales
     * @tags mentions-legales
     * @return {[mentions-legales]} 200 - success response - application/json
     */
    .get(controllerHandler(websiteController.mentionsLegales));
    
module.exports = router;
