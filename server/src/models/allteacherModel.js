const mongoose = require('mongoose');

const allTeacherSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true
    }
});

const AllTeacher = mongoose.model('AllTeacher', allTeacherSchema);

module.exports = AllTeacher;
