const Course = require('./../models/courseModel');

exports.getAllCourses = async (req, res) => {
    try {
        const foundCourse = await Course.find();
        res.json(foundCourse);
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
