import express from 'express';
import Post from '../models/PostModel.js';

const router = express.Router();

router.post('/', async (req, res) =>{

    const { title, body } = req.body;

    await Post.create({title, body})

    res.status(200).json({msg:'Post Request'})

} )

export { router as postsRoutes }