const mongoose=require("mongoose");

const Form8Schema=new mongoose.Schema({
    username:{
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
    
    caste:{
        type:String,
    },
    dob:{
        type:String,
    },
    ad:{
        type:String,
    },
    
    


    ap1:{
        type:String,
    },
    ap:{
        type:String,
    },
    vy:{
        type:String,
    },
    rashan:{
        type:String,
    },
    adhar:{
        type:String,
    },
    vote:{
        type:String,
    },
    
    


},
 {timestamps:true}
);


module.exports=mongoose.model("Form8",Form8Schema);