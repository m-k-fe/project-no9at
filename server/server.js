const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();
//Middelwares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Routes
const studentRouter = require("./routes/studentRouter");
app.use("/api/students", studentRouter);
//Server
const port = process.env.PORT;
app.listen(port, console.log(`Server Running On Port ${port}`));
