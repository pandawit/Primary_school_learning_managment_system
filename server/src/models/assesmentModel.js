const mongoose = require('mongoose');

const assesmentSchema = new mongoose.Schema({
    deadLine: String,
    grade: String,
    subject: String,
    mark: String,
    deadLine: Date,
    assesment_in_text: String,
    assesment_description:String
});

const Assesment = mongoose.model('Assesment', assesmentSchema);

module.exports = Assesment;