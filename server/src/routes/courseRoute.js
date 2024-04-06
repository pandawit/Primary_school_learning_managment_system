const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/submitCourse', courseController.submitCourse); 

module.exports = router;
