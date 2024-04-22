const express = require('express');
const router = express.Router();
const allteacherController = require('../controllers/allteacherController');

// Route to get all teachers
router.get('/getAllTeacher', allteacherController.getAllTeachers);

module.exports = router;
