/**
 * Created by Syed Afzal
 */
require("./server/config/config");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./server/db");

const app = express();

//connection from db here
db.connect(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//  adding routes
require("./server/routes")(app);

app.on("ready", () => {
  app.listen(3000, () => {
    console.log("Server is up on port", 3000);
  });
});

module.exports = app;
