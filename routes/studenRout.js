import express from "express";

import createStudent from '../controllers/studentController.js'

const studentrouter = express.Router();

studentrouter.post("/create", createStudent);



export default studentrouter;
