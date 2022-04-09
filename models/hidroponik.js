const mongoose = require("mongoose");

const hidroponikSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  voltage: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    required: true,
  },
  moist: {
    type: Number,
    required: true,
  },
  relay: {
    type: Number,
    required: true,
  },

  postDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("hidroponik", hidroponikSchema);
