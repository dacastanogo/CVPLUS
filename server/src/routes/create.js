const { Router } = require('express');
const router = Router();
const {postNewCv, putNewCv} = require('../controllers/create_controller')

router.route('/')
    .post(postNewCv)
    .put(putNewCv)


router.route('/:id')
    .put(putNewCv)
module.exports = router;