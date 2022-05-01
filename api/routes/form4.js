const Form4 = require("../models/Form4");

const router=require("express").Router();



//create new post
router.post("/",async (req,res)=>{
   const newForm4=new Form4(req.body);
   try{
        const savedPost=await newForm4.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});




module.exports=router;