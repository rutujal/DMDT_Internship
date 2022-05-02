const Age = require("../models/Age");

const router=require("express").Router();



//create new post
router.post("/",async (req,res)=>{
   const newAge=new Age(req.body);
   try{
        const savedPost=await newAge.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});




module.exports=router;