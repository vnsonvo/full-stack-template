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

app.listen(PORT, (_) => {
  console.log(`Server is running on port ${PORT}`);
});
