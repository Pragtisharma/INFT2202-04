const { response } = require("express");
const bcrypt = require('bcrypt');

const UserModel= require("../models/user")

/**
 * search database to see if username exists
 * @param {*} usernameToFind 
 * @returns 
 */
function userExists(usernameToFind) {
    // Use find method to search for the username
    return  UserModel.User.findOne({ username: usernameToFind  })
    .then(exists => {
        return exists;
    })
    .catch(error => {
        console.error("Cannot find user:", error);
        return false;
    });
}

/**
 * renders home view
 * @param {*} req 
 * @param {*} res 
 */
exports.homeView = (req, res) => {
    res.render('home', {
        pageTitle: 'INFT 2202 - Home Page',
    })
}

/**
 * render the login page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: ''
    });
}

/**
 * render the login failure page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLoginFailure = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: 'Username/password combination does not exist. Please try again.'
    });
}

/**
 * render the login success page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLoginSuccess = (req, res, next) => {
    res.render('login-success', {
        pageTitle: '',
        user: { username: req.body.username }
    });
}

/**
 * handle login form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postLogin = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // check to see if user pass combo exists
    // render either login-failure or login-success
    // TODO: check against DB instead of hardcoded values

    if (username === 'admin' && password === 'admin') {
        // user password combination matches, show success
        this.getLoginSuccess(req, res);
    } else {
        // user password combination failed/does not exist
        // show error message
        this.getLoginFailure(req, res);
    }
}


/**
 * render the register page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getRegister = (req, res, next) => {
    res.render('register', {
        pageTitle: 'Register a New Account',
        errorMessage: ''
    });
}

/**
 * handle register form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postRegister = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (userExists(username)) { 
        // there is already a user with the username
        // show error message
        res.render('register', {
            pageTitle: 'Register a New Account',
            errorMessage: 'Username is already in use. Please choose another.'
        }) ;
    } else {
        // create a new user, show registerConfirm page
        const newUser = new User({
            username: username,
            hashPassword: password
        });
       // Save the new user to the database
        await newUser.save();
  
    // Render the confirmation page
    return res.render('register', {
        pageTitle: 'Registration Successful',
        username: username
    });}}



module.exports = exports;
//reference:https://dev.to/pawel/users-database-with-login-and-signup-functions-from-scratch-node-js-mongodb-514c


