const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
    try {
        const foundStudent = await Student.find();
        res.json(foundStudent);
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
