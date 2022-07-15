const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8000;
