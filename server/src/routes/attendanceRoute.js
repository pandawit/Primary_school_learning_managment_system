const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Route for submitting attendance data
router.post('/submitAttendance', attendanceController.submitAttendance);

module.exports = router;
