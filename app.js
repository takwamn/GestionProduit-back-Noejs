var express = require('express');
var app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
//var cors = require('cors');

//app.use(cors());
app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

var ProduitController = require('./controller/ProduitController');
app.use('/produits', ProduitController);

module.exports = app;
