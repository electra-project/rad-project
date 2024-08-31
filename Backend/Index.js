const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const path = require("path");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Schema for User model
const Users = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Image storage Engine
const storage = multer.diskStorage({
  destination: "./Upload/Images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
app.use("/images", express.static("Upload/Images"));

// Middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res
      .status(401)
      .send({ errors: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, "secret_electra");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  }
};

// API creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.get("/allproducts", async (req, res) => {
  let product = await Product.find({});
  console.log("All product fetched");
  console.log(product);
  res.send(product);
});

app.get("/newcollection", async (req, res) => {
  let product = await Product.find({});
  let newcollection = product.slice(1).slice(-8);
  res.send(newcollection);
});

app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "Women" });
  let popular_in_women = products.slice(0, 4);
  res.send(popular_in_women);
});

// Creating Endpoint for registering the user
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let check = await Users.findOne({ email });
    if (check) {
      return res.status(400).json({
        success: false,
        errors: "Existing user found with same email address",
      });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10); // 10 is the number of salt rounds

    const user = new Users({
      name: username,
      email,
      password: hashedPassword,
      cartData: cart,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, "secret_electra"); // Use environment variable for secret
    res.json({ success: true, token });
  } catch (error) {
    console.error("Sign-Up Error:", error);
    res.status(500).json({ success: false, errors: "Server Error" });
  }
});

// Creating Endpoint for user login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await Users.findOne({ email });

    if (!user) {
      return res.json({ success: false, errors: "Wrong Email Id" });
    }

    // Compare the provided password with the hashed password in the database
    const passCompare = bcrypt.compareSync(password, user.password);

    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_electra"); // Use environment variable for secret
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, errors: "Server Error" });
  }
});

// Creating Endpoint for adding products in cart data
// Creating Endpoint for adding products in cart data
app.post("/addtocart", fetchUser, async (req, res) => {
  console.log("Adding to cart:", req.body.itemId);

  try {
    // Find the user
    let userData = await Users.findOne({ _id: req.user.id });

    if (!userData) {
      return res.status(404).send({ errors: "User not found" });
    }

    // Ensure cartData is initialized
    if (!userData.cartData) {
      userData.cartData = {};
    }

    // Initialize item in cart if not present
    if (!userData.cartData[req.body.itemId]) {
      userData.cartData[req.body.itemId] = 0;
    }

    // Increment item quantity
    userData.cartData[req.body.itemId] += 1;

    // Save updated cartData
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );

    res.send("Added");
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).send({ errors: "Internal Server Error" });
  }
});

// Creating Endpoint for removing products in cart data
app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("removed", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
  }
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
});

// Creating Endpoint for getting cart details
app.post("/getcart", fetchUser, async (req, res) => {
  console.log("GetCart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error:" + error);
  }
});
