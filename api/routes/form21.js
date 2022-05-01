const router=require("express").Router();

const Form21=require("../models/Form21");

//create new post
router.post("/",async (req,res)=>{
   const newForm21=new Form21(req.body);
   try{
        const savedPost=await newForm21.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});

module.exports=router;