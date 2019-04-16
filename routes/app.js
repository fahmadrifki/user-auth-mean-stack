var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/about', function (req, res, next) {
    res.render('about');
});

router.get('/contact:userNama?', function (req, res, next) {
  var nama = '';
  /*var email = '';
  var pesan = '';*/
  User.findOne({}, function(err, doc) {
    if (err) {
      return res.send('Error');
    }
    if (doc) {
      nama = doc.nama;
      /*email = doc.email;
      pesan = doc.pesan*/
    }
  });
  res.render('contact', {nama: req.params.userNama ? req.params.userNama: ''});
});

router.post('/contact', function (req, res, next) {
    var nama = req.body.nama;
    /*var email = req.body.email;
    var pesan = req.body.pesan;*/
    var user = new User({
      nama: nama,
      /*email: email,
      pesan: pesan*/
    });
    user.save();
    //res.send('Berhasil!!!');
    res.redirect('contact' + nama);
});

router.get('/users', function (req, res){
    //get all the users
    User.find({}, function (err, docs){
        if (err) throw err;
        //object of all the users
      res.json(docs);
    });
});

module.exports = router;
