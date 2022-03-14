const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const usersRoute=require("./routes/users");
const postRoute=require("./routes/posts");
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




app.listen("5000",()=>{
    console.log("Backend is running");
})

