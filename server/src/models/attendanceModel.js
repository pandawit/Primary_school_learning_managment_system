const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
    },
    subjectPeriod: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    attendanceStatus: {
        type: String,
        enum: ['present', 'absent', 'late'],
        required: true,
    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
