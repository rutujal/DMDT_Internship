const mongoose=require("mongoose");

const Cert2Schema=new mongoose.Schema({
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
    ic:{
        type:String,
    },
    ic1:{
        type:String,
    },
    ai:{
        type:Number
     },
     ai1:{
        type:Number
     },
     relation:{
        type:String,
    },
    bname:{
        type:String,
    },
    purpose:{
        type:String,
    },
   

},
 {timestamps:true}
);


module.exports=mongoose.model("Cert2",Cert2Schema);