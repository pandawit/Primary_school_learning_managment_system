const Teacher = require('./../models/teacherModel');

const submitTeacher = async (req, res) => {
  try {
    const {
     teacherID,firstName,secondName,lastName,birthDate,age,gender,email,city,houseNumber,nationality,fieldOfStudy,educationLevel,profession,kebele} = req.body;
    
    const teacher = new Teacher({
    
       teacherID: teacherID,
       firstName: firstName,
       secondName: secondName,
       lastName: lastName,
       birthDate: birthDate,
       age: age,
       gender: gender,
       email: email,
       city: city,
       houseNumber: houseNumber,
       nationality: nationality,
       fieldOfStudy: fieldOfStudy,
       educationLevel: educationLevel,
       profession: profession,
       kebele: kebele 
    });
    
    await teacher.save();

    res.status(201).json({ message: 'Teacher registered successfully' });
  } catch (error) {
    console.error('Error registering teacher:', error.message); 
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

module.exports = {
    submitTeacher 
};
