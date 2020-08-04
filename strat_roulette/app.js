const express = require('express')
const app = express()
const path = require("path");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

mongoose.connection.on("connected", _ =>
  console.log("Success: connected to MongoDb!")
);
mongoose.connection.on("error", _ => {
  console.log("Error connecting to MongoDb. Check MONGODB_URI in env.sh");
  process.exit(1);
});
mongoose.connect('mongodb://localhost:27017/strat_roulette', {useNewUrlParser: true});

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const routes = require("./routes");
app.use("/", routes);

app.listen(3000)