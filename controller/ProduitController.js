
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());

var Produit = require('../model/produit');
var db = require('../db');

//affichage de tous les produits
router.get('/getall', function (req, res) {
    Produit.getProduit(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

//affichage d'un produit
router.get('/getone/:id', function (req, res) {//temchi
    console.log(req.body);
        db.query('SELECT * FROM `produit` WHERE `id`=?', [req.params.id], function (error, results, fields) {
           if (error) throw error;
           res.json(results);
        });
        });
     
//creation d'un produit
router.post('/add', function (req, res) {//temchi
        var postData  = req.body;
        db.query('INSERT INTO produit SET ?', postData, function (error, results, fields) {
           if (error) throw error;
           res.end(JSON.stringify(results));
         });
     });
//suppression
     router.delete('/delete/:id', function (req, res) {//temchi
        console.log(req.body);
        db.query('DELETE FROM `produit` WHERE `id`=?', [req.params.id], function (error, results, fields) {
           if (error) throw error;
           res.end('Record has been deleted!');
         });
     });

 router.put('/update/:id', function (req, res) {//tmchi
    db.query('UPDATE `produit` SET `nomp`=?,`prixunitairep`=?,`qte`=? where `id`=?' ,[req.body.nomp,req.body.prixunitairep, req.body.qte, req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

module.exports = router;