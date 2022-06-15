// Import builtin NodeJS modules to instantiate the service
const https = require("https");
const fs = require("fs");

require('dotenv').config();
const debug = require('debug')('app:server');
const app = require('./app');


const port = process.env.PORT ?? 3000;

const server = https.createServer(

    // Provide the private and public key to the server by reading each
// file's content with the readFileSync() method.    
    {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
    },
    app
);

server.listen(port, () => {
    debug(`Listening on ${port}`);
});
