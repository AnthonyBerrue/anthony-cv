const express = require('express');

// controller
const { websiteController } = require('../../controllers/website');

// error handling for controller
const controllerHandler = require('../../helpers/apiControllerHandler');

const router = express.Router();

router

    .route('/')
    /**
     * GET /cv-developpeur
     * @summary Get cv-developpeur
     * @tags cv
     * @return {[cv-developpeur]} 200 - success response - application/json
     */
    .get(controllerHandler(websiteController.cvDeveloppeur));
    
module.exports = router;
