const mongoose=require("mongoose");

const Form2Schema=new mongoose.Schema({
    username:{
        type:String
    },
   
    age:{
       type:Number
    },
    fullName:{
        type:String,
    },
    s1:{
        type:String,
    },
  
    fatherName:{
        type:String,
    },
    occupation:{
        type:String,
    },
    village:{
        type:String,
    },
    taluka:{
        type:String,
    },
    state:{
        type:String,
    },
    district:{
        type:String,
    },
    pincode:{
        type:String,
    },
    cc:{
        type:String,
    },
    co:{
        type:Number,
    },
    ci:{
        type:Date,
    },
    ia:{
        type:String,
    },
    ad:{
        type:String,
    },
    
   

},
 {timestamps:true}
);


module.exports=mongoose.model("Form2",Form2Schema);