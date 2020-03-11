const createCtrl = {};

const createModel = require('../models/CV');



createCtrl.postNewCv = async (req, res) => {
    const { name, age, userThumbnailPath, title, profile, 
        major, yearMajorFinalization, projectName1, 
        projectDate1, projectCompany1, projectName2, 
        projectDate2, projectCompany2, phone, email, 
        github, linkedin, twitter } = req.body;
    const newCv = new createModel({
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

createCtrl.putNewCv = async (req, res) => {
    const { name, age, userThumbnailPath, title, profile, 
        major, yearMajorFinalization, projectName1, 
        projectDate1, projectCompany1, projectName2, 
        projectDate2, projectCompany2, phone, email, 
        github, linkedin, twitter } = req.body;
    //console.log(req.body)
    //const cvid = req.params.id 
    console.log(yearMajorFinalization)
    await createModel.findOneAndUpdate({_id: req.params.id}, {
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

module.exports = createCtrl