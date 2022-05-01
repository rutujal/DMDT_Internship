const Cert2 = require("../models/Cert2");

const router=require("express").Router();



//create new post
router.post("/",async (req,res)=>{
   const newCert2=new Cert2(req.body);
   try{
        const savedPost=await newCert2.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});




module.exports=router;