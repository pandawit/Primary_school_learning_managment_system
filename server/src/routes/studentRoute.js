const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/submitStudent',studentController.submitStudent); 
module.exports = router;
