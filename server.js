// require dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const TestModel = require("./models/schema");

// create PORT
const PORT = process.env.PORT || 8000;

// Connect to Mongo
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
    console.log(`Connected to database: ${mongoose.connection.name}`);
  } catch (err) {
    console.log("Failed to connect", err);
  }
};
connectDB();

// Middleware
// set view engine - template engine
app.set("view engine", "ejs");
// serving static files in public folder
app.use(express.static("public"));
// URL-encoded data will be parsed
app.use(express.urlencoded({ extended: true }));
// parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());
/* express.json() will parse the body from post/fetch request except from html post form. It wont parse information from the html post form
So express.json() is a body parser for post request except html post form and express.urlencoded({extended: true}) is a body parser for html post form */
// implementing CORS helps to access numerous functionalities on the browser
app.use(cors());

app.get("/", async (req, res) => {
  try {
    // get data from DB
    const content = await TestModel.find({});
    console.log(content);
    // data is fetched, then render ejs and pass the data so that it can render on the page
    res.render("index.ejs", { data: content });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(PORT, (_) => {
  console.log(`Server is running on port ${PORT}`);
});
