const mongoose = require("mongoose");

const chickenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  relay1: {
    type: Number,
    required: true,
  },
  relay2: {
    type: Number,
    required: true,
  },
  relay3: {
    type: Number,
    required: true,
  },
  relay4: {
    type: Number,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("chickenMonitoring", chickenSchema);
