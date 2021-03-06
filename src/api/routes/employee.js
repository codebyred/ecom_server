import express from 'express';
import {
    get_employee_info,post_employee_info,
    update_employee_info,delete_employee_info
} from '../controllers/employeeController.js';

const employee_router = express.Router();

employee_router
.get('/',get_employee_info)
.post('/',post_employee_info)
.put('/:id',update_employee_info)
.delete('/:id',delete_employee_info)

export {employee_router};
