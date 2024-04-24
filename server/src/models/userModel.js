const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Student', 'Teacher'], 
       
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
