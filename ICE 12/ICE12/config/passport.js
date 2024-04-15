const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const { validPassword } = require('../lib/passwordUtils');
const User = connection.models.User;

// Strategies are responsible for authenticating requests by implementing an authentication mechanism that defines how to encode a credential, such as a password or an assertion from an identity provider (IdP), in a request.
// We are using a username and password strategy that requires a callback that will check if the user exists and if the password is valid and return true or false
passport.use(new LocalStrategy(
    function(req, username, password, done) {
      // Find the user by username in the database
      User.findOne({ username: req.body.username }, function (err, user) {
        if (err) { return done(err); }
        // If user not found or password doesn't match, return false
        if (!user || !user.verifyPassword(req.body.password)) { 
          // Trigger failed login
          return done(null, false); 
        }
        // Trigger successful login
        return done(null, user);
      });
    }
  ));


//LocalStrategy is a passport.js strategy that allows you to authenticate users based on a username and password. It is used to verify user credentials by checking if the username and password are valid.

// In Passport.js, serializeUser and deserializeUser are two methods that are used to store and retrieve user data from a session. The serializeUser method is used to determine which data of the user object should be stored in the session.

// The result of the serializeUser method is attached to the session as req.session.passport.user = { ~~ serialized user object }.
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
// The deserializeUser method is used to retrieve the whole object from the session. It should return the full object to be attached to the request as req.user.
passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
  module.exports = passport;
  //REFERENCE:https://www.npmjs.com/package/passport