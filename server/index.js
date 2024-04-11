const express= require("express");
const mongoose=require("mongoose");
const courseRoutes=require("./src/routes/courseRoute.js")
const studentRoutes=require("./src/routes/studentRoute.js")
const assesmentRoutes=require("./src/routes/assesmentRoute.js")
const teacherRoutes=require("./src/routes/teacherRoute.js")
//const resourceRoutes=require("./src/routes/resourceRoute.js")
const bodyParser=require("body-parser");

const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));




mongoose.connect('mongodb://localhost:27017/pslms')
    .then(() => {
        console.log('Connected to MongoDB');

    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

    app.use("/course",courseRoutes)
    app.use("/student",studentRoutes)
    app.use("/assesment",assesmentRoutes)
    app.use("/teacher",teacherRoutes)
    //app.use("/resource",resourceRoutes)
    const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
                console.log(`Server started on port ${PORT}`);
    
});


