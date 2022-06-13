const websiteController = {
    /**
     * Home controller which display documentation link.
     * ExpressMiddleware signature
     * @param {object} _ Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    homePage(_, res) {
        res.render('homepage.html');
    },
    
    cvDeveloppeur(_, res) {
        res.render('cv-developpeur.html');
    },

    portfolio(_, res) {
        res.render('portfolio.html');
    },

    contact(_, res) {
        res.render('contact.html');
    },

    mentionsLegales(_, res) {
        res.render('mentions-legales.html');
    },

};

module.exports = { websiteController };
