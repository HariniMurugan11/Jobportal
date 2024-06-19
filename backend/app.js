const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

//import authRoutes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobsTypeRoutes = require('./routes/jobsTypeRoutes');
const jobsRoutes = require('./routes/jobsRoutes');

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("DB connected")).catch((err)=>console.log(err));


//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());


//error middleware
app.use(errorHandler);

//routes middleware
// app.get('/', (req, res)=>{
//     res.send("Hello from Node js")
// });
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobsTypeRoutes);
app.use('/api', jobsRoutes);


//port
const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});