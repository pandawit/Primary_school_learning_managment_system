const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Attendance schema
const AttendanceSchema = new Schema({
    studentID: {
        type: String,
        required: true
    },
    subjectPeriod: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    attendanceStatus: {
        type: String,
        enum: ['present', 'absent', 'late'],
        required: true
    }
});

// Create the Attendance model
const Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = Attendance;
