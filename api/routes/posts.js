const router=require("express").Router();
const User=require("../models/User");
const Post=require("../models/Post");


//create new post
router.post("/",async (req,res)=>{
   const newPost=new Post(req.body);
   try{
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err);
       console.log(err);
   }
});



//get post
router.get("/:id",async (req,res)=>{
    try{
        const post1=await Post.findById(req.params.id);
        res.status(200).json(post1);
    }catch(err){
        res.status(500).json(err);
    }
});

//get all posts
router.get("/",async (req,res)=>{
    const username=req.query.user;
    const catName=req.query.cat;
    try{
        let posts;
        if(username){
            posts=await Post.find({username});
        }else if(catName){
            posts=await Post.find({categories:{
                $in:[catName]
            }})
        }else{
            posts=await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;