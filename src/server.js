// npm packages imports
const express = require("express");
const expressHandleBars = require("express-handlebars");
const path = require("path");

// global imports
const connection = require("./config/connection");
const routes = require("./routes");

const PORT = 5001;
const app = express();

//static middleware
app.use(express.static(path.join(__dirname, "../public")));

// set up handlebars
const hbs = expressHandleBars.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// body parser middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    console.log(`[INFO]: Connected to the DATABASE Successfully!!!`);

    app.listen(PORT, () => {
      console.log(`navigate to http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to connect to DB => ${error.message}`);
  }
};

init();
