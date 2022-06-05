const router=require("express").Router();
const Form7 = require("../models/Form7");



//create new post
router.post("/",async (req,res)=>{
   const newForm7=new Form7(req.body);
   try{
        const savedPost=await newForm7.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});


module.exports=router;