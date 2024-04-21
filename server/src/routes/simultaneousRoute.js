// const express = require('express');
// const router = express.Router();
// const CourseController = require('../controllers/courseController');
// const AccountController = require('../controllers/accountController');

// router.post('/simultaneous', async (req, res) => {
//     try {
//         // Submit to courses table
//         await CourseController.submitCourse(req, res);
        
//         // Submit to accounts table
//         await AccountController.submitAccount(req, res);
        
//         // If everything is successful, send a success response
//         res.status(201).json({ message: 'Course and Account added successfully' });
//     } catch (error) {
//         console.error('Error handling form submission:', error.message);
//         res.status(500).json({ error: 'Server error', message: error.message });
//     }
// });

// module.exports = router;
