const Attendance = require('../models/attendanceModel');
const getAllAttendance = async (req, res) => {
    try {
        
        const foundattendance = await Attendance.find();
        res.json(foundattendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllAttendance
};
