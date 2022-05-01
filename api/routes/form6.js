const Form6 = require("../models/Form6");

const router=require("express").Router();



//create new post
router.post("/",async (req,res)=>{
   const newForm6=new Form6(req.body);
   try{
        const savedPost=await newForm6.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});




module.exports=router;