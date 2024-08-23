const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require('cookie-parser');
require("dotenv").config();
const app = express();

const jwtS = "simaakloveslegocats123";

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // have to recheck this
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Create new user with hashed password
    const newCreatedUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Return the user object, excluding the password
    res.json({ newCreatedUser });
  } catch (err) {
    console.log("Registration Unsucessful");
    res.status(422).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userDocument = await userModel.findOne({ email });
  if (userDocument) {
    const passwordWork = bcrypt.compareSync(password, userDocument.password);
    if (passwordWork) {
      jwt.sign(
        { email: userDocument.email, id: userDocument._id },
        jwtS,
        {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie ("token", token).json(userDocument)
            // ("token", token, { sameSite: "none", secure: false }) // prev none an true, im changing this for dev test  by abdulla
            .json("password is correct");
        }
      );
    } else {
      res.status(422).json("password is incorrect");
    }
  } else {
    res.json("not found");
  }
});

app.get('/profile' , (req,res) => {
  const {token} = req.cookie
  if (token) {
    jwt.verify(token, jstSecret, {}, (err, user) => {
      if(err) throw err;
      res.json(user)
    });
  }else{
    res.json('empty')
  }
  res.json({token});
})

app.listen(4000);
