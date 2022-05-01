const router=require("express").Router();
const User=require("../models/User");
const Post=require("../models/Post");

const Cast=require("../models/Cast")
//create new post
router.post("/",async (req,res)=>{
   const newCast=new Cast(req.body);
   try{
        const savedPost=await newCast.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});




module.exports=router;