const { Router } = require('express');
const router = Router();
const {getUserInfo} = require('../controllers/home_controller')

router.route('/:userid')
    .get(getUserInfo)

module.exports = router;