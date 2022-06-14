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
     * GET /contact
     * @summary Get contact
     * @tags contact
     * @return {[contact]} 200 - success response - application/json
     */
    .get(cache.route({
        expire: {
          200: 5000,
          '4xx': 10,
          403: 5000,
          '5xx': 10,
          xxx: 1
        }
      }), controllerHandler(websiteController.contact));
    
module.exports = router;
