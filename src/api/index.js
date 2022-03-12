/*routes index*/
import express from "express";
import {employee_router} from "./routes/employee.js";
import {signup_router} from "./routes/singup.js";
// import {login_router} from "./routes/login.js";

const router = express.Router();

router.use('/signup',signup_router);
// router.use('/login',login_router);
router.use('/employee',employee_router);



export default router;
