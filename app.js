const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const shopRoute = require("./routes/shop");
const notFoundController = require("./controllers/notfound");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute);
app.use(notFoundController.notFound);

app.listen(3000);
