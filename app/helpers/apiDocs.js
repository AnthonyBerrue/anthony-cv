const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
    info: {
        version: '1.0.0',
        title: 'anthony-cv',
        description: 'cv en ligne',
    },
    baseDir: __dirname,
    // We analyze all the files of the project
    filesPattern: ['../routes/**/*.js', '../models/*.js', '../errors/*.js'],
    // URL where the documentation page will be available
    swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE,
    // Activate documentation through an API route
    exposeApiDocs: true,
    apiDocsPath: '/api/docs',
};

/**
 *
 * @param {object} app Express application
 * @returns {object} Express JSDoc Swagger middleware that create web documentation
 */
module.exports = (app) => expressJSDocSwagger(app)(options);
