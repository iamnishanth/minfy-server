const mongoose = require("mongoose");

const mongodbURL = `mongodb+srv://admin-iamnishanth:${process.env.DB_PASS}@cluster0.5ehrt.mongodb.net/minfy`;

mongoose.connect(
  mongodbURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Connected Successfully to MongoDB");
    }
  }
);

module.exports = mongoose;
