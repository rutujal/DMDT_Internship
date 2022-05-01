const Form1 = require("../models/Form1");

const router=require("express").Router();



//create new post
router.post("/",async (req,res)=>{
   const newForm1=new Form1(req.body);
   try{
        const savedPost=await newForm1.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});




module.exports=router;