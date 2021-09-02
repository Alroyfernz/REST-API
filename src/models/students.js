const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: {
    type: Number,

    required: true,
    // unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
