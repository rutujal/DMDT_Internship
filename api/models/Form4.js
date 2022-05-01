const mongoose=require("mongoose");

const Form4Schema=new mongoose.Schema({
    username:{
        type:String
    },
    efor:{
        type:String
    },
    org1:{
        type:String
    },
    edate:{
        type:Date
    },
    ndate:{
        type:Date
    },
    s:{
        type:String
    },cname:{
        type:String
    },
    earea:{
        type:String
    },caste:{
        type:String
    },org2:{
        type:String
    }

},
 {timestamps:true}
);


module.exports=mongoose.model("Form4",Form4Schema);