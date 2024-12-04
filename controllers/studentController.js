import studentModel from "../models/studentModel.js";
const createStudent = async (req, res) => {

  try {
    const { IDCard, name, email, phone, classId } = req.body;
    console.log(req.body);

    if(!name || !email || !phone || !classId){
      return res.status(404).json({message:"fail request"})
    }
    const newstudent = new studentModel({
     IDCard,
      name,
      email,
      phone,
      classId,
      new: true,
    });
    await newstudent.save();
    return res.status(201).json({ newstudent });
  } catch (error) {
    console.log(error.message);
  }
};
export default createStudent;



