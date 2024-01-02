const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require('./config/corsOptions');
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/errorHandler");

//.env constants
require("dotenv").config();
const api = process.env.API_URL;
const PORT = process.env.PORT;
const DB_URI = process.env.MONGO_URI;

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//cors config
app.use(cors(corsOptions))

//Middleware for token verification
app.use(authJwt());

//error handling middleware
app.use(errorHandler);

const categoryRouter = require("./routes/category");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

//routes
app.use(`${api}category`, categoryRouter);
app.use(`${api}products`, productsRouter);
app.use(`${api}users`, usersRouter);

//db connection
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection is successful");
  })
  .catch((err) => {
    console.log("Error connecting to database: ", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
