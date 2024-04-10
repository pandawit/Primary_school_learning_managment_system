const Assesment = require('./../models/assesmentModel');

const submitAssesment = async (req, res) => {
  try {
    const {assesment_description,grade,subject,mark,deadLine,assesment_in_text } = req.body;
    
    const assesment = new Assesment({
        // i didn't put the file attribute in here because i can't find file data type
        assesment_description: assesment_description,
    grade: grade,
    subject: subject,
    mark: mark,
    deadLine: deadLine,
    assesment_in_text: assesment_in_text
    });
    
    await assesment.save();

    res.status(201).json({ message: 'assesment submited successfully' });
  } catch (error) {
    console.error('Error submiting assesment:', error.message); 
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

module.exports = {
    submitAssesment 
};