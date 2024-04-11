const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');


router.post('/submitTeacher',teacherController.submitTeacher); 
module.exports = router;
