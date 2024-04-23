const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/allattendanceController');


router.get('/getAllAttendance', attendanceController.getAllAttendance);

module.exports = router;
