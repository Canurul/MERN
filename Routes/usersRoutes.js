import express from 'express';
import { registerUser, loginUser} from '../controllers/usersController.js'

const router = express.Router();

//Register user Router
router.post('/',registerUser);

//Register user Router
router.post('/login',loginUser);

export { router as usersRoutes }




