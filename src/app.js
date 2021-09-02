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

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
