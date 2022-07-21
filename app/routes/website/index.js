const express = require('express');

// we get all the API controllers
const { websiteController } = require('../../controllers/website');

// we retrieve all the routes
const cvDeveloppeurRouter = require('./cv-developpeur');
const portfolioRouter = require('./portfolio');
const contactRouter = require('./contact');
const mentionsLegalesRouter = require('./mentions-legales');
const errorPageRouter = require('./errorPage');

// const controllerHandler = require('../../helpers/websiteControllerHandler');

// error handling function
const { WebsiteError } = require('../../helpers/errorHandler');

const router = express.Router();

// API default route, here we configure it for all methods
router.all('/', websiteController.homePage);

// We prefix the API routers
router.use('/cv-developpeur', cvDeveloppeurRouter);
router.use('/portfolio', portfolioRouter);
router.use('/contact', contactRouter);
router.use('/mentions-legales', mentionsLegalesRouter);
router.use('*', errorPageRouter);

router.use(() => {
    throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
