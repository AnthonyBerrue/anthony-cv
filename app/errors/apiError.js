/**
 * We implement our own type of error.
 * This is called an exception
 * We take the opportunity to allow him to take
 * additional information: an HTTP status code
 * Instances will carry this info with them
 * and it can be used later
 * @typedef {object} ApiError
 * @property {string} status - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Error message
 */
 module.exports = class ApiError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
};
