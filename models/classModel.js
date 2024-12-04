import mongoose from "mongoose";
const classSchema = new mongoose.Schema(
  {
    className: { require: true, type: String },
    roomNumber: { require: true, type: String }
  },
  { timestamps: true }
);

const classModel = mongoose.model("class", classSchema);
export default classModel;
