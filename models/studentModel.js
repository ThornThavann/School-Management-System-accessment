import mongoose from "mongoose";
const studentSchema = new mongoose.Schema(
  {
    IDCard: { require: true, type: Number },
    name: { require: true, type: String },
    email: { require: true, type: String },
    phone: { require: true, type: Number },
    classId: { require: true, type: Number },

  },
  { timestamps: true }
);
const studentModel = mongoose.model("student", studentSchema)
export default studentModel;
