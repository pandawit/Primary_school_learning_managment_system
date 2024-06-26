const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./src/routes/courseRoute.js");
const studentRoutes = require("./src/routes/studentRoute.js");
const assessmentRoutes = require("./src/routes/assessmentRoute.js");
const teacherRoutes = require("./src/routes/teacherRoute.js");
const allCourseRoutes = require("./src/routes/allcourseRoute.js"); 
const allStudentRoutes = require("./src/routes/allStudentRoute.js"); 
const allTeacherRoutes = require("./src/routes/allteacherRoute.js"); 
const allAssessmentRoutes = require("./src/routes/allassessmentRoute.js"); 
const attendanceRoutes = require("./src/routes/attendanceRoute.js"); 
const allattendanceRoutes = require("./src/routes/allattendanceRoute.js");
const userRoutes = require("./src/routes/userRoute.js");
const userteachRoutes = require("./src/routes/userteachRoute.js");







// const accountRoutes = require("./src/routes/accoutRoute.js"); 
// const simultaneousRoutes = require('./src/routes/simultaneousRoute.js');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/pslms")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => console.error("Error connecting to MongoDB:", err));

app.use("/course", courseRoutes);
app.use("/student", studentRoutes);
app.use("/assessment", assessmentRoutes);
app.use("/teacher", teacherRoutes);
app.use("/data", allCourseRoutes); 
app.use("/student",allStudentRoutes);
app.use("/teacher",allTeacherRoutes);
app.use("/assessment",allAssessmentRoutes);
app.use("/attendance",attendanceRoutes);
app.use("/attendance", allattendanceRoutes);
app.use("/user", userRoutes);
app.use("/userteach", userteachRoutes);





// app.use("/account", accountRoutes);
// app.use("/course", simultaneousRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});