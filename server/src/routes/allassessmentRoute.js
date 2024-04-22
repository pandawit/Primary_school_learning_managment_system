const express = require('express');
const router = express.Router();
const allassessmentController = require('../controllers/allassessmentController');

// Route to get all assessments
router.get('/getAllAssessments', allassessmentController.getAllAssessments);

module.exports = router;
