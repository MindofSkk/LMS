const express = require("express");
const cors = require("cors");
const Connection = require("./config/db.js");
const { userController } = require("./Routes/UserRoutes.js");
const { bookController } = require("./Routes/Book.Routes.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => res.send("hello"));
app.use("/user", upload.single("Image"), userController);
app.use("/books", upload.single("Image"), bookController);

Connection();
app.listen(8080, () => {
  console.log("server started on port 8080");
});
