const express = require('express');
const router = express.Router();
const userteachersController = require('../controllers/userteachController');

router.post('/createUserteachers', userteachersController.createUserteachers);

module.exports = router;
