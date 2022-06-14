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
    .get(cache.route({
        expire: {
          200: 5000,
          '4xx': 10,
          403: 5000,
          '5xx': 10,
          xxx: 1
        }
      }), controllerHandler(websiteController.errorPage));
    
module.exports = router;
