const Assessment = require('../models/assessmentModel');

exports.getAllAssessments = async (req, res) => {
    try {
        const foundassessment = await Assessment.find();
        res.json(foundassessment);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
