/*const Resource = require('./../models/resourceModel');

const submitResource = async (req, res) => {
  try {
    const { resourceName, description, type, duration} = req.body;
    const file = req.file;
    const resource = new Resource({
      
        // i didn't put the file attribute in here because i can't find file data type
       resourceName: resourceName,
        description: description,
        type: type,
        duration: duration,
        file: {
            data: file.buffer, // Store file data as buffer
            contentType: file.mimetype // Store file content type
        }
    });
    
    await resource.save();

    res.status(201).json({ message: 'resource registered successfully' });
  } catch (error) {
    console.error('Error registration resource:', error.message); 
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};

module.exports = {
    submitResource 
};*/