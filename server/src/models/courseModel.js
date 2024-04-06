const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course_name: String,
    course_description: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
