const express = require('express');

const { websiteController } = require('../../controllers/website');

// we retrieve all the routes
const cvDeveloppeurRouter = require('./cv-developpeur');
const portfolioRouter = require('./cv-developpeur');
const contactRouter = require('./cv-developpeur');
const mentionsLegalesRouter = require('./cv-developpeur');

const controllerHandler = require('../../helpers/websiteControllerHandler');
const { WebsiteError } = require('../../helpers/errorHandler');

const router = express.Router();

// API default route, here we configure it for all methods
router.all('/', controllerHandler(websiteController.homePage));

// We prefix the API routers
router.use('/cv-developpeur', cvDeveloppeurRouter);
router.use('/portfolio', portfolioRouter);
router.use('/contact', contactRouter);
router.use('/mentions-legales', mentionsLegalesRouter);


router.use(() => {
    throw new WebsiteError(404, 'Page introuvable');
});

module.exports = router;
