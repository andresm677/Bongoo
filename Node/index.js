const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const servicesRouter = require('./Routes/services');
const usersRouter = require('./Routes/users')
const authRouter = require("./Routes/auth")
const offersRouter = require("./Routes/offers")

mongoose
  .connect(
    "mongodb+srv://Esteban:bongoo@cluster0.u6skz.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("mongoose connected");
  })
  .catch(() => {
    console.log("Cannot get access to Mongo");
  });
  app.use(cors())
  app.use(express.json());
  app.use("/api/services", servicesRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/auth",authRouter)
  app.use("/api/offers", offersRouter)
  app.listen(3001, () => console.log("Listening"));
