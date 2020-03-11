const { Schema, model } = require('mongoose');

const cvSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    userThumbnailPath: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: false
    },
    yearMajorFinalization: {
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
});

module.exports = model('Cv', cvSchema);