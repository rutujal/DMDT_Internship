const mongoose=require("mongoose");

const Form7Schema=new mongoose.Schema({
    username:{
        type:String
    },
    nName:{
       type:String
    },
    fullName:{
        type:String,
    },
    PName:{
        type:String,
    },
    address:{
        type:String,
    },
    vmahiti:{
        type:String,
    },
    caste:{
        type:String,
    },
    dob:{
        type:String,
    },
    ad:{
        type:String,
    },
    ageP:{
        type:String,
    },
    rp:{
        type:String,
    },
    
    dt:{
        type:String,
    },
    sy:{
        type:String,
    },
    dn:{
        type:String,
    },
    dg:{
        type:String,
    },
    id:{
        type:String,
    },
    
    ap:{
        type:String,
    },
    ap1:{
        type:String,
    },
    ap2:{
        type:String,
    },
    vy:{
        type:String,
    },
    fam:{
        type:String,
    },
    
    v2y:{
        type:String,
    },
    v3y:{
        type:String,
    },
    mp:{
        type:String,
    },
    res:{
        type:String,
    },
    vote:{
        type:String,
    },
    aadhar:{
        type:String,
    },


},
 {timestamps:true}
);


module.exports=mongoose.model("Form7",Form7Schema);