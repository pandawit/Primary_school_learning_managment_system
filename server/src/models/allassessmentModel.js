const mongoose = require('mongoose');

const allassessmentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true
    },
    test1: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    test2: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    midExam: {
        type: Number,
        required: true,
        min: 0,
        max: 30
    },
    finalExam: {
        type: Number,
        required: true,
        min: 0,
        max: 50
    }
});

const AllAssessment = mongoose.model('AllAssessment', allassessmentSchema);

module.exports = AllAssessment;
