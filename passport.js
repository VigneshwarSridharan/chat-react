var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var connection = require('./database');

passport.use(new LocalStrategy(
  function (username, password, done) {
    connection.query(`SELECT * FROM user_master WHERE username="${username}" OR email="${username}"`, function (err, rows, fields) {
      if(rows.length) {
        if(rows[0].password == password) {
          var passuser = rows[0];
          delete passuser.password;
          delete passuser.created_at;
          delete passuser.updated_at;
          return done(null, passuser);
        }
        else {
          return done(null, false, { message: 'Incorrect Password.', type: 'password' });
        }
      }
      else {
        return done(null, false, { message: 'Incorrect username / Email.', type: 'username' });
      }
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = passport;