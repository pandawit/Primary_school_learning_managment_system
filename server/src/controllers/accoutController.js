// const Account = require('./../models/accoutModel');

// const submitAccount = async (req, res) => {
//   try {
//     const { course_name } = req.body;
    
//     const account = new Account({
//         course_name: course_name
        
//     });
    
//     await account.save();

//     res.status(201).json({ message: 'Account added successfully' });
//   } catch (error) {
//     console.error('Error submitting Account:', error.message); 
//     res.status(500).json({ error: 'Server error', message: error.message });
//   }
// };

// module.exports = {
//     submitAccount 
// };
