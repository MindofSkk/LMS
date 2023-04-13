const mongoose = require("mongoose");

const UserBooklistSchema = new mongoose.Schema({
    user_id:{ type: String, required: true},
    Books: { type: Array },
});

const UserBooklistModel = mongoose.model("user", UserBooklistSchema);

module.exports = {
    UserBooklistModel,
};
