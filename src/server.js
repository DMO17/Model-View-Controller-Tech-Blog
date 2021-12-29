// npm packages imports
const express = require("express");
const expressHandleBars = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// global imports
const connection = require("./config/connection");
const routes = require("./routes");

const PORT = 5001;
const app = express();

//static middleware
app.use(express.static(path.join(__dirname, "../public")));

// set session db
const sessionOptions = {
  secret: "Super secret secret", // env,
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400000,
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: connection,
  }),
};

app.use(session(sessionOptions));

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
