import express from "express";
// import cors from "cors";
import connectDB from "./config/db.js";
import studentrouter from "./routes/studenRout.js";
import classrouter from "./routes/classRoute.js";
import dotenv from "dotenv";

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();

// var corsOptions = {
//   origin: "http://localhost:5173",
// };
// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Football CMS application." });
// });


app.use("/api", classrouter);
app.use("/api", studentrouter)


//connectDB
connectDB();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
