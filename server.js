const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const clear = require("clear");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("/build"));
// Add routes, both API and view
app.use(routes);
console.log('LOOK __dirname ', __dirname)
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/blueberryDB";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});


app.get('*', (req,res) => {
	const index = path.resolve(__dirname, './client/build/public/index.html')
	res.sendFile(index)
})

// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/blueberryDB",
//   {
//     useMongoClient: true
//   }
// );

// Start the API server
app.listen(PORT, function() {
	clear();
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});