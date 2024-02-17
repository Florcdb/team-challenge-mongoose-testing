const express = require("express");
const router = express.Router()
const Post = require('../models/Post.js')


router.post("/create", async(req,res)=>{try {
    const post  = await Post.create(req.body);
    res.status(201).json(post)
} catch (error) {
    console.log(error);
    res.status(500).json({message:"cannot create that post"});
    
}})


router.get('/', async(req,res)=>{
    try {
        const post = await Post.find();
        res.json(post)
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({message:"Trouble too create a post"})
    }
});

router.delete('/id/:_id', async (req, res)=>{
    try{
        const id = req.params._id
        const deleting = await Post.findByIdAndDelete(id)
        if (!deleting) {
            return res.status(404).json({message: "Post with that id not found"})
          }  
          res.json({message: "Post deleted successfully", deleting})
    }catch(error){
        console.log(error)
    }
});

router.get('/id/:_id', async (req, res)=>{
    try{
        const id = req.params._id
        const findPost = await Post.findById(id)
        if(!findPost) {
            return res.status(404).json({message: "Post with that id not found"})
        }
        res.json(findPost)
    }catch(error){
        console.log(error)
    }
});






module.exports = router