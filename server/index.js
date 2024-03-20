const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/Register");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/auth-react");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email }).then((register) => {
    if (register.password === password) {
      res.send("Success");
    } else {
      res.send("Password salah");
    }
  });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const register = new RegisterModel({ name, email, password });
  try {
    await register.save();
    res.send(register);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
