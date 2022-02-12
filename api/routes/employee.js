/*
user gets data about employee
*/ 
import express from 'express';
import {get_employee_info,post_employee_info} from '../controllers/employeeController.js';

const router = express.Router();
//mysql connection

router
.route('/')
.get(get_employee_info)
.post(post_employee_info)

export default router;
