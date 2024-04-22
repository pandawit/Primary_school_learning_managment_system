const Student = require('./../models/studentModel');

const submitStudent = async (req, res) => {
  try {
    const { studentID,firstName,secondName,lastName,birthDate,age,gender,grade,pFirstName,pLastName,pPhoneNumber,pWork,pEmail,city,kebele} = req.body;
    
    const student = new Student({
      
        studentID: studentID,
        firstName: firstName,
        secondName: secondName,
        lastName: lastName,
        birthDate: birthDate,
        age: age,
        gender: gender,
        grade: grade,
        pFirstName: pFirstName,
        pLastName: pLastName,
        pPhoneNumber: pPhoneNumber,
        pWork: pWork,
        pEmail: pEmail,
        city: city,
        kebele: kebele 
    });
    
    await student.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error('Error registration student:', error.message); 
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

module.exports = {
    submitStudent 
};