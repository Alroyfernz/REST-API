const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");
const Student = require("./models/students");

app.use(express.json());

app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.send(createUser);
  } catch (err) {
    res.send(400).send(err);
  }
});

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
    console.log(studentsData);
  } catch (err) {
    res.send(err);
  }
});

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedData = await Student.findByIdAndUpdate(_id, req.body);
    console.log(req.body);
    res.send(updatedData);
    console.log(updatedData);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
