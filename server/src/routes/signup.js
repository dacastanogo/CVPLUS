const { Router} = require('express');
const router = Router();
const {getSignUpInfo, postSigupInfo} = require('../controllers/signup_controller')


router.route('/')
    .get()
    .post()

module.exports = router;