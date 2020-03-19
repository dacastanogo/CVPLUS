const { Router} = require('express');
const router = Router();
const {getSignUpInfo, postSigupInfo} = require('../controllers/signup_controller')


router.route('/')
    .get(getSignUpInfo)
    .post(postSigupInfo)

module.exports = router;