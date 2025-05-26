const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

app.get('/',(req,res)=>{
 res.send('Hello world');
})


  app.listen(process.env.BACKEND_PORT,()=>{
    console.log(`Server is running on port ${process.env.BACKEND_PORT}`);
  })
