const homeCtrl = {};

homeCtrl.getUserInfo = (req, res) => res.send('Home Routes')
//solamente va a hacer uso del userinfo collection db
module.exports = homeCtrl