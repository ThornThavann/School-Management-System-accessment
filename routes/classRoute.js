import express from "express";

import createClass from "../controllers/classController.js";
import getClassById  from "../controllers/classController.js";
import deleteClass from "../controllers/classController.js";
import updateClass from "../controllers/classController.js";
import getallClass from "../controllers/classController.js";


const classrouter = express.Router();

classrouter.post("/create/class", createClass);
classrouter.get("/class", getallClass);
classrouter.get("/get/:id", getClassById);
classrouter.delete("/delete/:id", deleteClass);
classrouter.put("/update/:id", updateClass);





export default classrouter;
