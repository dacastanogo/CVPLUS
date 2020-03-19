const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User')

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id,done) => {
    const user = await User.findById(id);
    done(null, user)
});

passport.use('local-signup', new LocalStrategy({
    userNameField: 'username',
    emailField: 'email',
    passwordField: 'password',
    passReqToCallback: true    
}, async (req, email, password, username, done) => {
    const takenEmail = User.findOne({email: email});
    if(existentEmail) {
        return done(null, false, req.flash('singupMessage', 'The email is already taken'));
    } else {
        const newUser = new User()
        newUser.username = username;
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }
    const newUser = new User()
    newUser.username = username;
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    await newUser.save();
    done(null, newUser);
}))