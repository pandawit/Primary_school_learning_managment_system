// const { studentId, firstName } = req.body;
    
//     // Retrieve the student from your MongoDB database
//     const student = await StudentModel.findOne({ studentId, firstName });

//     if (student) {
//         // Store student's ID and first name in the session
//         req.session.studentId = student.studentId;
//         req.session.firstName = student.firstName;

//         // Redirect to the student dashboard
//         res.redirect('/stud_dashboard.html');
//     } else {
//         res.status(401).send('Invalid student ID or first name');
//     }
// ;