import User from '../models/UserModel.js'
import bcrypt from 'bcryptjs'

/************************** Register User **************************/

const registerUser = async (req, res)=>{

    //grab data from request body

    const { email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({ error:'All fields are required' })
    }

    //Check if email already exists

    const exist = await User.findOne({email})
    if(exist){
    return res.status(400).json({error:'Email is already taken'})
    }

    //Hash the password

    const salt = await bcrypt.genSalt();
    const hashed =await bcrypt.hash(password, salt);

    try{
    const user = await User.create({email, password: hashed})
    res.status(200).json({email})

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

/************************** Login User **************************/
const loginUser = async (req, res)=>{
    res.send('login');
}
export { registerUser, loginUser};