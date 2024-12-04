import classModel from "../models/classModel.js";

const createClass = async (req, res) => {
  try {
    const { className, roomNumber } = req.body;
    console.log(req.body);

    if(!className || !roomNumber){
      return res.status(404).json({message:"fail request"})
    }
    const newclass = new classModel({
  
      className,
      roomNumber,
    
      new: true,
    });
    await newclass.save();
    return res.status(201).json({ newclass });
  } catch (error) {
    console.log(error.message);
  }
};


export default createClass;

export const getallClass = async (req, res) => {
  try {
    const result = await classModel.find();

    return res.status(200).json({message:"sucess", result});
  } catch (error) {
    return res.status(500).json({
      message: "error",
    });
  }
};

 export const getClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const classDetail = await classModel.findById(id);
    if (!classDetail) {
      return res.status(404).json({ message: "Class not found" });
    }
    return res.status(200).json({ classDetail });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteClass = async (req, res)=>{

  try {
    await classModel.findByIdAndDelete(req.params.id);
  
    return res.status(200).json({ message: "delere sucessfully"});
  } catch (error) {
    console.log(error.message);
  }
};

export const updateClass = async (req, res)=>{

  try {
const classID = req.params.id;
const createclass = req.body;

const update = await classModel.findByIdAndUpdate(
  classID,
  createclass,
{new:true, runValidators:true}

);
if(!update){
  return res.status(404).json({ message: "fail"});

}
   return res.status(200).json({ message: "update sucessfully"});
  } catch (error) {
    console.log(error.message);
  }
};
 



