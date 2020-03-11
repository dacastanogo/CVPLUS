const editCtrl = {};

const editModel = require('../models/CV');

editCtrl.getAllcvs = async (req, res) => {
    const cvs = await editModel.find();
    res.json(cvs)
}

editCtrl.getCv = async (req, res) => {
    const cv = await editModel.findById(req.params.id)
    res.json(cv)
}

editCtrl.putCv = async (req, res) => {
    const { name, age, userThumbnailPath, title, profile, 
        major, yearMajorFinalization, projectName1, 
        projectDate1, projectCompany1, projectName2, 
        projectDate2, projectCompany2, phone, email, 
        github, linkedin, twitter } = req.body;
    //console.log(req.body)
    //const cvid = req.params.id
    console.log(projectName2)
    await editModel.findOneAndUpdate({__id: req.params.id}, {
        name,
        age,
        userThumbnailPath,
        title,
        profile,
        major,
        yearMajorFinalization,
        projectName1,
        projectDate1,
        projectCompany1,
        projectName2,
        projectDate2,
        projectCompany2,
        phone,
        email,
        github,
        linkedin,
        twitter
    });
    res.json({message: 'Note Updated'})
}

editCtrl.deleteCv = async (req, res) => {
    await editModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
}

module.exports = editCtrl;
