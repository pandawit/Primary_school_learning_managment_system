const mongoose = require('mongoose');

const allCourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const AllCourse = mongoose.model('AllCourse', allCourseSchema);

module.exports = AllCourse;
