const { Router } = require("express");
const { BookModel } = require("../Models/Books.model");
const { userModel } = require("../Models/User.model");

const bookController = Router();

bookController.get("/", async (req, res) => {
  let data = await BookModel.find();
  res.send(data);
});

bookController.post("/add", async (req, res) => {
  let data = req.body;
  data.Image = req.file.path;
  let BookData = await BookModel.create(data);
  // console.log(data)
  res.send(BookData);
  BookData.save();
});

bookController.delete("/:id", async (req, res) => {
  let data = await BookModel.findOneAndDelete(req.params.id);
  res.send(data);
});

bookController.patch("/:id", async (req, res) => {
  let data = await BookModel.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
  data.save();
});

bookController.get("/:id", async (req, res) => {
  const bookId = req.params.id;

  BookModel.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(book);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

bookController.get("/search/:id", async (req, res) => {
  console.log("search", req.params.id);
  let data = await BookModel.find({
    $or: [{ Name: { $regex: req.params.id } }],
  });
  res.send(data);
});

bookController.get("/issuebooklist/:id", async (req, res) => {
  userModel
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

bookController.post("/return", async (req, res) => {
  // console.log("heelo");
  // console.log(req.body);
  let userid = req.body.user_id;
  let bookid = req.body.book_id;

  let user = await userModel.findById(userid);
  // console.log(user);

  let temp = user.issuedBooks;
  const updatedData = temp.filter((item) => item._id !== bookid);

  // console.log(updatedData);
  user.issuedBooks = updatedData;
  user.save();
  res.send({ message: "Book Return Sucessfully", issuedBooks: updatedData });
});

bookController.post("/issuebook", async (req, res) => {
  const Data = req.body;

  //time
  const currentDateTime = new Date();
  const time = currentDateTime.toLocaleTimeString();
  const date = currentDateTime.toLocaleDateString();
  //  console.log(time, date);
  const futureDate = new Date(currentDateTime);
  // Add 7 days to the future date
  futureDate.setDate(currentDateTime.getDate() + 7);
  const returndate = futureDate.toLocaleDateString();
  console.log(returndate);

  Data.IssueDate = date;
  Data.IssueTime = time;
  Data.ExpiryDate = returndate;
  Data.ExpiryTime = time;

  let user = await userModel.findById(Data.userid);

  let temp = user.issuedBooks;

  let status = false;

  await temp.forEach((e) => {
    if (e._id == Data._id) {
      status = true;
    }
  });

  if (!status) {
    temp.push(Data);

    user.save();
    res.send({ message: "Book Issued Sucessfully", add: 1 });
  } else {
    res.send({ message: "book already issued", add: 0 });
  }
});

module.exports = {
  bookController,
};
