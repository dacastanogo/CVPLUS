const editCtrl = {};

const cvModel = require('../models/CV');

editCtrl.getAllcvs = async (req, res) => {
    const cvs = await cvModel.find();
    res.json(cvs)
}

editCtrl.getCv = async (req, res) => {
    const cv = await cvModel.findById(req.params.id)
    res.json(cv)
}

editCtrl.postNewCv = async (req, res) => {
    const { name, age, userThumbnailPath, title, profile, 
        major, yearMajorFinalization, projectName1, 
        projectDate1, projectCompany1, projectName2, 
        projectDate2, projectCompany2, phone, email, 
        github, linkedin, twitter } = req.body;
    const newCv = new cvModel({
        name: name,
        age: age,
        userThumbnailPath: userThumbnailPath,
        title: title,
        profile: profile,
        major: major,
        yearMajorFinalization: yearMajorFinalization,
        projectName1: projectName1,
        projectDate1: projectDate1,
        projectCompany1: projectCompany1,
        projectName2: projectName2,
        projectDate2: projectDate2,
        projectCompany2: projectCompany2,
        phone: phone,
        email: email,
        github: github,
        linkedin: linkedin,
        twitter: twitter
    });
    await newCv.save();
    res.json({message: 'Cv Saved'})
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
    await cvModel.findOneAndUpdate({_id: req.params.id}, {
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
    await cvModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
}

module.exports = editCtrl;
