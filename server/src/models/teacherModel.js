const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    teach_id: String,
    teachF_name: String,
    teachS_name: String,
    teachL_name: String,
    date: Date,
    age: Number,
    gender: String,
    email: String,
    city: String,
    Hnumber: String,
    nationality: String,
    fieldOfstudy: String,
    educationLev: String,
    profession: String,
    image: {
        data: Buffer,
        contentType: String
    },
    kebele: Number
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;