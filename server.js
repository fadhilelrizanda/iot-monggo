const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");

app.use(cors());

mongoose.connect(
  "mongodb+srv://fadhil:h5pwnFOXlBrmm1HL@cluster0.om8qk.mongodb.net/BlogDB?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
app.use(express.json());

const chickenMonitoring = require("./routes/chickenMonitoring");
app.use("/", chickenMonitoring);

// const subscribersRouter = require("./routes/subscribers");
// app.use("/subscribers", subscribersRouter);
// const hidroponik = require("./routes/hidroponik");
// app.use("/", hidroponik);

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
