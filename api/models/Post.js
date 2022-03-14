const mongoose=require("mongoose");

const PostSchema=new mongoose.Schema({
    username:{
        type:String
    },
    name:{
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
    }
},
 {timestamps:true}
);

module.exports=mongoose.model("Post",PostSchema);