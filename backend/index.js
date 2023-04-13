const express = require("express");
const cors=require("cors")
const Connection = require("./config/db.js");
const { userController } = require("./Routes/UserRoutes.js");
const { bookController } = require("./Routes/Book.Routes.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => res.send("hello"));
app.use("/user", userController);
app.use("/books", bookController);


Connection();
app.listen(8080, () => {
  console.log("server started on port 8080");
});
