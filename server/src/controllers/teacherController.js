const Teacher = require('../models/teacherModel');
const Userteach = require('../models/userteachModel');

const submitTeacher = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            teacherID,
            firstName,
            secondName,
            lastName,
            birthDate,
            age,
            gender,
            email,
            city,
            houseNumber,
            nationality,
            fieldOfStudy,
            educationLevel,
            profession,
            kebele
        } = req.body;

        // Create a new teacher entry
        const teacher = new Teacher({
            teacherID,
            firstName,
            secondName,
            lastName,
            birthDate,
            age,
            gender,
            email,
            city,
            houseNumber,
            nationality,
            fieldOfStudy,
            educationLevel,
            profession,
            kebele
        });

        // Save the teacher data in the Teacher model
        await teacher.save();

        
        const role = "Teacher";
        // Create a new Userteach entry with teacher's ID, first name, and role
        const userteach = new Userteach({
            teacherID,
            firstName,
            role
        });

        // Save the userteach data in the Userteach model
        await userteach.save();

        // Send a success response
        res.status(201).json({ message: 'Teacher registered successfully' });
    } catch (error) {
        // Handle any errors
        console.error('Error registering teacher:', error.message);
        res.status(500).json({ error: 'Server error', message: error.message });
    }
};

module.exports = {
    submitTeacher
};
