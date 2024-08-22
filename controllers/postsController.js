import Post from "../models/PostModel.js"
import mongoose from 'mongoose';
/************************** Get All Posts **************************/

const getPosts = async (req, res)=>{

    try{
        const posts = await Post.find()
        res.status(200).json({ posts })

    } catch(error){
        res.status(500).json({ error: error.message})
    }

}

/************************** Create New Post **************************/

async function addPost(req, res){
    
        // Grab data from request body
    
        const { title, body } = req.body;
    
        //check the fields are not empty
    
        if(!title || !body){
    
        return res.status(400).json({ error:'all fields are required'})
    
        }
    
        try {
    
            const post = await Post.create({title, body})
    
            res.status(200).json({success:'Post Request', post})
    
        } catch (error){
    
            res.status(400).json({ error: error.message})
    
    } 
}

/************************** Delete Post **************************/

const deletePost = async (req, res)=>{

   // Check if the ID is valid type


    if(!mongoose.Types.ObjectId.isValid(req.params.id)){

        return res.status(400).json({ error: "incorrect ID"})

    }

    //Check the post exists

    const post = await Post.findById(req.params.id)

    if(!post){

        return res.status(400).json({ error: "Post does not exist"})
    }
    try{

        await post.deleteOne()
        res.status(200).json({success:'Post was deleted succesfully'})

    } catch(error){
        res.status(500).json({ error: error.message})
    }

   }

   /************************** Update Post **************************/

   const updatePost = async (req, res) => {

     // Grab data from request body

     const { title, body } = req.body;

     //check the fields are not empty

     if(!title || !body){
        return res.status(400).json({ error:'all fields are required'});
        }
     if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({ error: "incorrect ID"});
    }
     //Check the post exists
     const post = await Post.findById(req.params.id);

    if(!post){
        return res.status(400).json({ error: "Post does not exist"});
    }
    try {
        await post.updateOne({title, body})
        res.status(200).json({success:'Post was deleted succesfully'});
    }catch(error){
        res.status(500).json({ error: error.message})
    }
   }
export { getPosts, addPost, deletePost, updatePost }