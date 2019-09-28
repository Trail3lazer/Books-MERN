const express = require('express');
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const port = process.env.PORT || 5000;
const routes = require("./routes");

// init DB
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
     app.use(express.static(path.join(__dirname, 'client/build')));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist", { useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=>console.log("DB connected"));

// console.log that server is up and running
app.listen(port, () => console.log(`Listening on  http://localhost:${port}/`));

