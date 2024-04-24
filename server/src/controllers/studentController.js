const Student = require('../models/studentModel');
const User = require('../models/userModel'); // Import the User model

const submitStudent = async (req, res) => {
    try {
        const { studentID, firstName, secondName, lastName, birthDate, age, gender, grade, pFirstName, pLastName, pPhoneNumber, pWork, pEmail, city, kebele } = req.body;

        // Create a new student
        const student = new Student({
            studentID,
            firstName,
            secondName,
            lastName,
            birthDate,
            age,
            gender,
            grade,
            pFirstName,
            pLastName,
            pPhoneNumber,
            pWork,
            pEmail,
            city,
            kebele
        });
        await student.save();

        // Create a new user entry with studentID and firstName
        const role = "Student";
        const user = new User({
            studentID,
            firstName,
            role
        });
        await user.save();

        res.status(201).json({ message: 'Student registered successfully' });
    } catch (error) {
        console.error('Error registration student:', error.message);
        res.status(500).json({ error: 'Server error', message: error.message });
    }
};

module.exports = {
    submitStudent
};
