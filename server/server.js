const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const createUser = require("./controller/userController");
const books = require("./controller/BookController");
const app = express();

mongoose
  .connect(
    "mongodb+srv://dirkishore002:smkishore@cluster0.l4n82dw.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", createUser);
app.use("/api/user", createUser);
app.use("/api/books", books);

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
