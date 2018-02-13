const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const clear = require("clear");
const QuickBooks = require("./qbo")
const http = require('http');
const port = process.env.PORT || 3001;
const request = require('request');
const qs = require('querystring');
const util = require('util');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express(),
    staticServe = express.static(`${ __dirname }/public`);
const Tokens = require('csrf');
const csrf = new Tokens();


QuickBooks.setOauthVersion('2.0');




// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/blueberryDB",
  {
    useMongoClient: true
  }
);

// ==============================
//   QBO Api section 
// ==============================

// INSERT YOUR CONSUMER_KEY AND CONSUMER_SECRET HERE

const consumerKey = 'Q0okzRsxTRxYvsayc9K8TxIiULQWb207BwUSS8uss3R3lpUgHd';
const consumerSecret = 'oM7TcmLyql8npJC6KFrs4LJpRlkupTAREZuquvGh';

// OAUTH 2 makes use of redirect requests
function generateAntiForgery(session) {
    session.secret = csrf.secretSync();
    return csrf.create(session.secret);
};

app.get('/requestToken', function(req, res) {
    const redirecturl = QuickBooks.AUTHORIZATION_URL +
        '?client_id=' + consumerKey +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3001/callback/') + //Make sure this path matches entry in application dashboard
        '&scope=com.intuit.quickbooks.accounting' +
        '&response_type=code' +
        '&state=' + generateAntiForgery(req.session);

      //  console.log( redirecturl );

    res.redirect(redirecturl);
});

app.get('/callback', function(req, res) {
    const auth = (new Buffer(consumerKey + ':' + consumerSecret).toString('base64'));

    const postBody = {
        url: 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + auth,
        },
        form: {
            grant_type: 'authorization_code',
            code: req.query.code,
            redirect_uri: 'http://localhost:3001/callback/' //Make sure this path matches entry in application dashboard
        }
    };

    //console.log( postBody );

    request.post(postBody, function(e, r, data) {
        const accessToken = JSON.parse(r.body);

        // save the access token somewhere on behalf of the logged in user
        const qbo = new QuickBooks(consumerKey,
            consumerSecret,
            accessToken.access_token, /* oAuth access token */
            false, /* no token secret for oAuth 2.0 */
            req.query.realmId,
            true, /* use a sandbox account */
            true, /* turn debugging on */
            4, /* minor version */
            '2.0', /* oauth version */
            accessToken.refresh_token /* refresh token */ );

       
        qbo.findVendors({
            fetchAll: true
        }, function(e, response) {
            // console.log(response)
            const qr = response.QueryResponse;

             console.log(qr)

            const vendors = qr.Vendor

           vendors.forEach(function(vendor){
              console.log(vendor.CompanyName)
              console.log(vendor.TaxIdentifier)
              console.log(vendor.BillAddr)
              console.log(vendor.PrimaryEmailAddr)
           })

 
        })

    });

    res.send('<!DOCTYPE html><html lang="en"><head></head><body><script>window.opener.location = "http://localhost:3010"; window.close();</script></body></html>');

 });

// ==========================
// End of QBO Api call code 
// ==========================



// Start the API server
app.listen(port, function() {
	clear();
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});