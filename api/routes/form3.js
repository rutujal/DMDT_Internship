const Form3 = require("../models/Form3");

const router=require("express").Router();



//create new post
router.post("/",async (req,res)=>{
   const newForm3=new Form3(req.body);
   try{
        const savedPost=await newForm3.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});




module.exports=router;