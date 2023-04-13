const { Router } = require("express");
const { UserBooklistModel } = require("../Models/UserBookslist.model");

const bookListController = Router();


bookListController.post("/boolistadd", async (req, res) => {
    
  let data = await UserBooklistModel.create(req.body);
  res.send(data);
  data.save();
});



module.exports = {
  bookListController,
};
