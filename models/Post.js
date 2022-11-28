const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  coffeeFlavor: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    require: true,
  },
  orderStatus: {
    type: String,
    require: true,
  },
  barista: {
    type: String,
    require: true,
    default: " "
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
