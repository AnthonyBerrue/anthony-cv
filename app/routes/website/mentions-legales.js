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
     * GET /mentions-legales
     * @summary Get mentions-legales
     * @tags mentions-legales
     * @return {[mentions-legales]} 200 - success response - application/json
     */
    .get(cache.route(), controllerHandler(websiteController.mentionsLegales));
    
module.exports = router;
