const { Router } = require("express");
const { BookModel } = require("../Models/Books.model");

const bookController = Router();

bookController.get("/", async (req, res) => {
  let data = await BookModel.find();
  res.send(data);
});

bookController.post("/add", async (req, res) => {
  let data = await BookModel.create(req.body);
  res.send(data);
  data.save();
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
    .then(book => {
      if (!book) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(book);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
});











module.exports = {
  bookController,
};
