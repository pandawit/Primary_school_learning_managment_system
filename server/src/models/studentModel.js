const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentID: String,
    firstName: String,
    secondName: String,
    lastName: String,
    birthDate: Date,
    age: Number,
    gender: String,
    grade: String,
    pFirstName: String,
    pLastName: String,
    pPhoneNumber: String,
    pWork: String,
    pEmail: String,
    city: String,
    kebele: Number
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;