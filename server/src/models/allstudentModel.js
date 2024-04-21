const mongoose = require('mongoose');

const allStudentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    studentGrade: {
        type: String,
        required: true
    }
});


const AllStudent = mongoose.model('AllStudent', allStudentSchema);

module.exports = AllStudent;
