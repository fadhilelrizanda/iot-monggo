const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  baris1: {
    type: Array,
  },
  baris2: {
    type: Array,
  },
  baris3: {
    type: Array,
  },
  baris4: {
    type: Array,
  },
  baris5: {
    type: Array,
  },
  baris6: {
    type: Array,
  },
  baris7: {
    type: Array,
  },
  baris8: {
    type: Array,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("wemosiot", subscriberSchema);
