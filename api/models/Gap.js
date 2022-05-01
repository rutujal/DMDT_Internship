const mongoose=require("mongoose");

const GapSchema=new mongoose.Schema({
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
    school:{
        type:String,
    },
    standard:{
        type:String,
    },
    exam:{
        type:String,
    },
    result:{
        type:String,
    },
    gapF:{
        type:String,
    },
    gapT:{
        type:String,
    },
    s3:{
        type:String,
    },
    state1:{
        type:String,
    },
    village1:{
        type:String,
    },
    district1:{
        type:String,
    },
    fullName2:{
        type:String,
    },
    pincode1:{
        type:String,
    },
    taluka1:{
        type:String,
    },

    

},
 {timestamps:true}
);

module.exports=mongoose.model("Gap",GapSchema);