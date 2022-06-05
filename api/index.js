const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const usersRoute=require("./routes/users");
const postRoute=require("./routes/posts");
const gapRoute=require("./routes/gap");
const certRoute=require('./routes/cert1');
const form21Route=require("./routes/form21");
const castRoute=require("./routes/cast")
const incomeRoute=require("./routes/income")
const cert2Route=require("./routes/cert2")
const form1Route=require("./routes/form1")
const form2Route=require("./routes/form2")
const form3Route=require("./routes/form3")
const form4Route=require("./routes/form4")
const form6Route=require("./routes/form6")
const ageRoute=require("./routes/age");
const form7Route=require("./routes/form7");
const form8Route=require("./routes/form8");
const multer=require("multer");
const path=require("path");


dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")));

mongoose.connect(process.env.MONGO_URL,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log("Connection successfull");
}).catch((err)=>{
    console.log(err);
});
app.get("/",(req,res)=>{
    res.render("hii");
})


app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts",postRoute);
app.use("/api/gap",gapRoute);
app.use("/api/cert1",certRoute);
app.use('/api/form7',form7Route);
app.use("/api/form21",form21Route);
app.use("/api/cast",castRoute);
app.use("/api/income",incomeRoute);
app.use("/api/cert2",cert2Route);
app.use("/api/form1",form1Route);
app.use("/api/form2",form2Route);
app.use("/api/form3",form3Route);
app.use("/api/form4",form4Route);
app.use("/api/form6",form6Route);
app.use("/api/age",ageRoute);
app.use('/api/form8',form8Route);


app.listen("5000",()=>{
    console.log("Backend is running");
})

