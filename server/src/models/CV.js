const { Schema, model } = require('mongoose');

const cvSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    title: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    major1: {
        type: String,
        required: false
    },
    yearMajorFinalization1: {
        type: String,
        required: false
    },
    major2: {
        type: String,
        required: false
    },
    yearMajorFinalization2: {
        type: String,
        required: false
    },
    projectName1: {
        type: String,
        required: true
    },
    projectDate1: {
        type: String,
        required: true
    },
    projectBrief1: {
        type: String,
        required: true
    },
    projectCompany1: {
        type: String,
        required: true
    },
    projectName2: {
        type: String,
        required: false
    },
    projectDate2: {
        type: String,
        required: false
    },    
    projectBrief2: {
        type: String,
        required: false
    },
    projectCompany2: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    github: {
        type: String,
        required: false,
        trim: true
    },
    linkedin: {
        type: String,
        required: false,
        trim: true
    },
    twitter: {
        type: String,
        required: false,
        trim: true
    },
    zoomCompanyAndYear1: {
        type: String,
        required: false
    },
    zoomCompanyAndYear2: {
        type: String,
        required: false
    },
    zoomPosition1: {
        type: String,
        required: false
    },
    zoomPosition2: {
        type: String,
        required: false
    },
    zoomDescription1: {
        type: String,
        required: false
    },
    zoomDescription2: {
        type: String,
        required: false
    },
});

module.exports = model('Cv', cvSchema);