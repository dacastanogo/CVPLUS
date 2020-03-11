const { Router } = require('express');
const router = Router();
const {getAllcvs, getCv, putCv, deleteCv, postNewCv} =  require('../controllers/edit_controller');

router.route('/')
    .get(getAllcvs)

router.route('/new')
    .post(postNewCv)

router.route('/:id')
    .get(getCv)
    .put(putCv)
    .delete(deleteCv)
    
module.exports = router;