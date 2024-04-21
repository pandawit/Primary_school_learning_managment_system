const express = require('express');
const router = express.Router();
const allstudentController = require('../controllers/allstudentController');

// Route to get all students
router.get('/getAllStudents', allstudentController.getAllStudents);

module.exports = router;