const { Router } = require('express');
const router = Router();
const {getLoginInfo, postLoginInfo} = require('../controllers/login_controller')

router.route('/')
    .get(getLoginInfo)
    .post(postLoginInfo)

module.exports = router;