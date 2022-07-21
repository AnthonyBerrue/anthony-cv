const express = require('express');
const cache = require('../../helpers/cache');

// controller
const { websiteController } = require('../../controllers/website');

// error handling for controller
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router

    .route('*')
    /**
     * GET /cv-developpeur
     * @summary Get cv-developpeur
     * @tags cv
     * @return {[cv-developpeur]} 200 - success response - application/json
     */
    .get(cache.route(), controllerHandler(websiteController.errorPage));
    
module.exports = router;
