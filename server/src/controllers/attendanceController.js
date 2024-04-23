const Attendance = require('../models/attendanceModel');

const submitAttendance = async (req, res) => {
    try {
        // Extract the attendance data from the request body
        const { studentID,subjectPeriod, date, grade, attendanceStatus } = req.body;
        
        // Create a new Attendance record with the provided data
        const attendance = new Attendance({
            studentID: studentID,
            subjectPeriod: subjectPeriod,
            date: date,
            grade: grade,
            attendanceStatus: attendanceStatus
        });

        // Save the attendance record to the database
        await attendance.save();

       
        res.status(201).json({ message: 'Attendance recorded successfully' });
    } catch (error) {
        res.status(500).json({message: error.message });
    }
};

module.exports = {
    submitAttendance
};
