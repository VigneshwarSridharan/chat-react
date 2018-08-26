var express = require('express');
var router = express.Router();
var passport = require('../passport');
var connection = require('../database');

/* GET home page. */

router.post('/register', function (req, res, next) {
  var { username, password, email } = req.body;
  var sql = `INSERT INTO user_master (username, password, email, created_at, updated_at) VALUES ("${username}", "${password}", "${email}", NOW(), NOW());`
  connection.query(sql, function (err, result) {
    if (err) {
      res.json({ ...err, message: 'Something Wrong :-)' });
    }
    res.json(result);
  })
})

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return res.json(info)
    }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      return res.json(user);
    });
  })(req, res, next);
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('*', function (req, res, next) {
  var port = ":" + req.app.settings.port;
  res.render('index', { url: req.protocol + "://" + req.hostname + port + '/', user: req.user });
});

module.exports = router;