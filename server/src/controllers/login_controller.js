const loginCtrl = {};

loginCtrl.getLoginInfo = (req, res) => res.send(' GET Login Info')
loginCtrl.postLoginInfo = (req, res) => res.send('POST user login info')

module.exports = loginCtrl