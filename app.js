const express = require("express");
const railRouter = require("./routes/RailRoutes");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// define the entry point
// example: localhost:3001/api/rails
app.use("/api/rails", railRouter);

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

module.exports = app;
