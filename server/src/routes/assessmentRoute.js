const express = require('express');
const router = express.Router();
const assessmentController = require('../controllers/assessmentController');

router.post('/submitAssessment', assessmentController.submitAssessment);

module.exports = router;