const Course = require('./../models/courseModel');

const submitCourse = async (req, res) => {
  try {
    const { course_name, course_description } = req.body;
    
    const course = new Course({
        course_name: course_name,
        course_description: course_description
    });
    
    await course.save();

    res.status(201).json({ message: 'Course added successfully' });
  } catch (error) {
    console.error('Error submitting course:', error.message); 
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

module.exports = {
    submitCourse 
};
