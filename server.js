// require dependencies
const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const app = express();

// declare variables
let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = "sample_mflix",
  collection;

// create PORT
const PORT = process.env.PORT || 8000;

// connect to Mongo
MongoClient.connect(dbConnectionString).then((client) => {
  console.log(`Connected to ${dbName} database.`);
  db = client.db(dbName);
  collection = db.collection("movies");
});

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

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (_) => {
  console.log(`Server is running on port ${PORT}`);
});
