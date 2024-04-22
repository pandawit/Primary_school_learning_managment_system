const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
    },
    test1: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    test2: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    midExam: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    finalExam: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    }
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
