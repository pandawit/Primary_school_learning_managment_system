const express = require('express');
const router = express.Router();
const assesmentController = require('../controllers/assesmentController');

router.post('/submitAssesment',assesmentController.submitAssesment); 
module.exports = router;