const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const expressSession = require("express-session");
const PostJob = require("./models/Job");

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  expressSession({
    secret: "newSession",
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const createUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res
    .status(201)
    .json({ success: true, message: `User Created: ${createUser}` });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email });
  if (!foundUser) {
    console.log("No user found");
    return;
  }
  const validUser = await bcrypt.compare(password, foundUser.password);
  if (!validUser) {
    console.log("Invalid password");
    return;
  }
  req.session.user = {
    id: foundUser._id,
    email: foundUser.email,
  };
  console.log("login endpoint hit");
  console.log(req.session.user);
  res.status(201).json({ success: true, message: "Login Successfull" });
  return;
});

app.post("/postJob", async (req, res) => {
  const newPostJob = await PostJob.create(req.body);
  res.status(201).json(newPostJob);
  console.log("new job created", newPostJob);
});

app.get("/jobs", async (req, res) => {
  const jobs = await PostJob.find().sort({ createdAt: -1 });
  res.status(201).json(jobs);
});

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server is running on port ${process.env.BACKEND_PORT}`);
});
