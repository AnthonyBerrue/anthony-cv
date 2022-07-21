const request = require('request');
const nodemailer = require('nodemailer');

const websiteController = {
  /**
   * Home controller which display documentation link.
   * ExpressMiddleware signature
   * @param {object} _ Express request object (not used)
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  homePage(_, res) {
    res.status(200).render('homepage');
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

  // nodemailer.  
  nodeMailer(req, res) {
     // g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
      return res.json({"responseError" : "something goes to wrong"
      });
    }
    // Put your secret key here.
    const secretKey = process.env.secretKey;
    // req.connection.remoteAddress will provide IP address of connected user.
    const verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function (error, response, body) {
      body = JSON.parse(body);
      // Success will be true or false depending upon captcha validation.
      if (body.success !== undefined && !body.success) {
        return res.json({"responseError" : "Failed captcha verification"
        });
      }

      // Nodemailer

    let transporter = nodemailer.createTransport({
      host: 'smtp.live.com',
      /*port: 465,
      secure: true,
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
      },*/
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      }
    });

    const {
      name,
      emails,
      messages,
      email,
      sujet,
      message
    } = req.body;

    // send box
    let info = transporter.sendMail({
      from: process.env.MAIL_USER, // sender address
      to: process.env.MAIL_USER, // list of receivers
      subject: sujet, // Subject line
      text: message, // plain text body
      html: `<h1><strong>Anthony</strong> vous venez de recevoir un message de :</h1>
        <ul>
        <li><strong>Nom Prénom</strong> : ${name}</li>
        <li><strong>Email</strong> : ${emails}</li>
        <li><strong>Message</strong>: ${messages}</li>
        </ul>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render('contact');
   
    console.log(error || response);
  });

  },

};

module.exports = {
  websiteController
};