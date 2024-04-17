const express = require('express');
const router = express.Router();
const allCourseController = require('../controllers/allcourseController');

// Route to get all courses
router.get('/getAllCourses', allCourseController.getAllCourses);
//router.get('/getAllCourses', (req, res)=>)
module.exports = router;

                                       