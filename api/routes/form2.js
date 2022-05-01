const Form2 = require("../models/Form2");

const router=require("express").Router();



//create new post
router.post("/",async (req,res)=>{
   const newForm2=new Form2(req.body);
   try{
        const savedPost=await newForm2.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});




module.exports=router;