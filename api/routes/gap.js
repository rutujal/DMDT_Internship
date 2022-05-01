const router=require("express").Router();

const Gap=require("../models/Gap");

//create new post
router.post("/",async (req,res)=>{
   const newGap=new Gap(req.body);
   try{
        const savedPost=await newGap.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});

module.exports=router;