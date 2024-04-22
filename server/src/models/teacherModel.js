const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    teacherID: String,
    firstName: String,
    secondName: String,
    lastName: String,
    birthDate: Date,
    age: Number,
    gender: String,
    email: String,
    city: String,
    houseNumber: String,
    nationality: String,
    fieldOfStudy: String,
    educationLevel: String,
    profession: String,
    kebele: Number
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
