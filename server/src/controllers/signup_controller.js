const signupCtrl = {};

const signupModel = require('../models/User');
const passport = require('passport');

signupCtrl.getSignUpInfo = (req, res) => res.send(' GET signup Info')
signupCtrl.postSigupInfo = passport.authenticate('local-signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    passReqToCallback: true
});


module.exports = signupCtrl