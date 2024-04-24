const Userteachers = require('../models/userteachModel');

const createUserteachers = async (req, res) => {
    const { teacherID, firstName, role} = req.body;

    try {
        // Create a new entry in the "userteachers" table
        const userteachers = new Userteachers({
            teacherID,
            firstName,
            role
        });

        await userteachers.save();
        res.status(201).json({ message: 'Userteachers entry created successfully' });
    } catch (error) {
        console.error('Error creating userteachers entry:', error.message);
        res.status(500).json({ error: 'Server error', message: error.message });
    }
};

module.exports = {
    createUserteachers
};
