
const websiteController = {
    /**
     * Home controller which display documentation link.
     * ExpressMiddleware signature
     * @param {object} _ Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    homePage(_, res) {
        res.render('homepage'); 
    },

    cvDeveloppeur(_, res) {
        res.render('cv-developpeur');
    },

    portfolio(_, res) {
        res.render('portfolio');
    },

    contact(_, res) {
        res.render('contact');
    },

    mentionsLegales(_, res) {
        res.render('mentions-legales');
    },

    errorPage(_, res) {
        res.render('404');
    },

};

module.exports = { websiteController };
