const debug = require('debug')('SQL:log');
const { Pool } = require('pg');

const config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
};

const pool = new Pool(config);

module.exports = {
    originalClient: pool,
    // We make a method to "intercept"
    // the requests in order to be able to display them
    // The "rest" operator is used to transform
    // here X variables in param. in a table
    async query(...params) {
        debug(...params);
        // The operator here has the opposite effect we transform
        // an array into a list
        // of variables / parameter what causes the client's query method to be
        // called exactly the same as our module
        return this.originalClient.query(...params);
    },
};
