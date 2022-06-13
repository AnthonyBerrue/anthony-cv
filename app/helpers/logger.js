const bunyan = require('bunyan');

const logger = bunyan.createLogger({
    name: 'anthony-cv',
    streams: [
        {
            level: 'error', // We only keep the logs from the error level
            path: '../../log', // The path of the log file (we think to ignore it in git)
            type: 'rotating-file', // we specify that we are going to rotate files (New file in a defined period + history of files kept)
            period: '1d', // daily log file rotation
            count: 3, // We keep a history of 3 log files (So here 3 days)
        },
    ],
});

module.exports = logger;
