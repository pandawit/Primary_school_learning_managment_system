const mongoose = require('mongoose');

const userteachersSchema = new mongoose.Schema({
    teacherID: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Teacher'],
        default: 'Teacher'
    }
});

const Userteachers = mongoose.model('Userteachers', userteachersSchema);

module.exports = Userteachers;
