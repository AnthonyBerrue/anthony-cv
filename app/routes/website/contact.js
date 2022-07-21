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
    .get(cache.route(), controllerHandler(websiteController.contact))
     /**
     * POST /contact
     * @summary Create a contact
     * @tags Category
     * @param {InputContact} request.body.required - contact info
     * @return {contact} 200 - success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - contact not found - application/json
     */
    .post(cache.del(), controllerHandler(websiteController.nodeMailer));

  
    
module.exports = router;
