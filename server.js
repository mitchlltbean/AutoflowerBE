// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
// const session = require("express-session");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;
// require("dotenv").config();
// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,

//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 2,
//     },
//   })
// );

// Static directory
app.use(express.static("public"));

// =============================================================

// =============================================================

// Routes -- ROUTES MUST COME AFTER MIDDLEWARE AND HANDLEBARS
// =============================================================
const categoryRoutes = require("./controllers/category");
app.use(categoryRoutes);

const employeeRoutes = require("./controllers/employee");
app.use(employeeRoutes);

const orderRoutes = require("./controllers/order");
app.use(orderRoutes);

const productRoutes = require("./controllers/product");
app.use(productRoutes);

const userRoutes = require("./controllers/user");
app.use(userRoutes);


// const seedRoute = require("./controllers/seedController");
// app.use(seedRoute);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
