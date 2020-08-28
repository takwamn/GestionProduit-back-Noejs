
var db = require('../db');

var Produit = {
    getProduit: function(callback)
    {
        return db.query('SELECT * from produit', callback);
    }
   
}

module.exports = Produit;