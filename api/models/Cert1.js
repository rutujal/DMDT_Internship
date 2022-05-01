const mongoose=require("mongoose");

const Cert1Schema=new mongoose.Schema({
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
    caste:{
        type:String,
    }

    

},
 {timestamps:true}
);

module.exports=mongoose.model("Cert1",Cert1Schema);