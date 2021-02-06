var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
require("./connection");

const indexRouter = require("./routes/index");
const assetsRouter = require("./routes/assets");
const clientsRouter = require("./routes/clients");
const ordersRouter = require("./routes/orders");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/assets", assetsRouter);
app.use("/clients", clientsRouter);
app.use("/orders", ordersRouter);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
