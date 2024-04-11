const Teacher = require('./../models/teacherModel');

const submitTeacher = async (req, res) => {
  try {
    const {image,teach_id,teachF_name, teachS_name,teachL_name,date,age,gender,email,city
    ,Hnumber,nationality,fieldOfstudy,educationLev,profession,kebele} = req.body;
    
    const teacher = new Teacher({
       // i didn't put the file attribute in here because i can't find file data type
       image:image,
       teach_id: teach_id,
       teachF_name: teachF_name,
       teachS_name: teachS_name,
       teachL_name: teachL_name,
       date: date,
       age: age,
       gender: gender,
       email: email,
       city: city,
       Hnumber: Hnumber,
       nationality: nationality,
       fieldOfstudy: fieldOfstudy,
       educationLev: educationLev,
       profession: profession,
       kebele: kebele 
    });
    
    await teacher.save();

    res.status(201).json({ message: 'Teacher registered successfully' });
  } catch (error) {
    console.error('Error registration teacher:', error.message); 
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

module.exports = {
    submitTeacher 
};