const router=require("express").Router();

const Cert1=require("../models/Cert1");

//create new post
router.post("/",async (req,res)=>{
   const newCert1=new Cert1(req.body);
   try{
        const savedPost=await newCert1.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});

module.exports=router;