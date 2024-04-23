const Assessment = require('../models/assessmentModel');

const submitAssessment = async (req, res) => {
    try {
        // Extract form data from the request body
        const { studentID, subject, test1, test2, midExam, finalExam } = req.body;
        
        // Create a new assessment document with the data
        const assessment = new Assessment({
            studentID: studentID,
            subject: subject,
            test1: test1,
            test2: test2,
            midExam: midExam,
            finalExam: finalExam,
        });
        
        // Save the assessment document to the database
        await assessment.save();

        // Send a successful response
        res.status(201).json({ message: 'Assessment submitted successfully' });
    } catch (error) {
        console.error('Error submitting assessment:', error.message);
        res.status(500).json({ error: 'Server error', message: error.message });
    }
};

module.exports = {
    submitAssessment,
};
