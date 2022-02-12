import express from "express";
import employeeRouter from "./routes/employee.js";
const router = express.Router();

router.use('/employee',employeeRouter);
export default router;
