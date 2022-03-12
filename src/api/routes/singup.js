/*availabe methods on route*/
import express from 'express';
import {signup} from "../controllers/signupController.js";
import {validateUser} from "../middlewares/userValidation.js"
let signup_router = express.Router();
signup_router.post('/',validateUser,signup);

export  {signup_router};
