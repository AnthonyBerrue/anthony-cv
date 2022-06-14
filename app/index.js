// const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const router = require('./routes');

const app = express();
require('./helpers/apiDocs')(app);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('views', `${process.cwd()}/app/views`); 

app.use("/public", express.static('./public/'));

// We activate the middleware to parse the JSON payload
app.use(express.json());

// We activate the middleware to parse the urlencoded payload
app.use(express.urlencoded({ extended: true }));


// We lift the CORS restriction
app.use(cors(process.env.CORS_DOMAINS ?? '*'));

app.use(cookieParser());

app.use(router);

module.exports = app;
