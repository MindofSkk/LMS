const { Router } = require("express");
const { BookModel } = require("../Models/Books.model");

const bookController = Router();

// jobController.get("/", async (req, res) => {
//     console.log(req.query)
//     const query = req.query

//     const job = await jobModel.find(query)

//     res.send(job)

// })

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


module.exports = {
    bookController,
  };
  
