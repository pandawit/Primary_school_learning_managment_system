const User = require('../models/userModel');

const createUser = async (req, res) => {
    const { studentID, firstName, role } = req.body;

    try {
        const user = new User({
            studentID,
            firstName,
            role
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Server error', message: error.message });
    }
};


module.exports = {
    createUser
};
