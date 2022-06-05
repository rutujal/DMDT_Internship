const router=require("express").Router();
const Form8 = require("../models/Form8");



//create new post
router.post("/",async (req,res)=>{
   const newForm8=new Form8(req.body);
   try{
        const savedPost=await newForm8.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});


module.exports=router;