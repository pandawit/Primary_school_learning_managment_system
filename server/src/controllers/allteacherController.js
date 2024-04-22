const Teacher = require('../models/teacherModel');

exports.getAllTeachers = async (req, res) => {
    try {
        const foundTeacher = await Teacher.find();
        res.json(foundTeacher);
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
