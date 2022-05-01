const mongoose=require("mongoose");

const Form21Schema=new mongoose.Schema({
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
    date:{
        type:Date,
    },
    election:{
        type:String,
    },
    organization:{
        type:String,
    },
    caste:{
        type:String,
    },
    certificate:{
        type:String,
    },
    s2:{
        type:String,
    },
    cdate:{
        type:Date,
    },
    area:{
        type:String,
    },
    autho:{
        type:String,
    },
    authoDate:{
        type:String,
    }


    

},
 {timestamps:true}
);

module.exports=mongoose.model("Form21",Form21Schema);