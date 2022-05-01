const mongoose=require("mongoose");

const CastSchema=new mongoose.Schema({
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
    s2:{
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
    s3:{
        type:String,
    },
    fullname1:{
        type:String,
    },

    village1:{
        type:String,
    },
    taluka1:{
        type:String,
    },
    state1:{
        type:String,
    },
    district1:{
        type:String,
    },
    pincode1:{
        type:String,
    },

},
 {timestamps:true}
);


module.exports=mongoose.model("Cast",CastSchema);