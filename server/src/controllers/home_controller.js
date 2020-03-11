const homeCtrl = {};

const userModel = require('../models/User');


homeCtrl.getUserInfo = async (req, res) => {
    const userInformation = await userModel.findById(req.params.userid)
    res.json(userInformation)
}
//solamente va a hacer uso del userinfo collection db
module.exports = homeCtrl