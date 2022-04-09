const express = require("express");
const router = express.Router();
const chickenMonitoring = require("../models/chickenMonitoring");

// Getting all
router.get("/", async (req, res) => {
  try {
    const chickenM = await chickenMonitoring.find();
    res.json(chickenM);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating one
router.post("/", async (req, res) => {
  const chickenM = new chickenMonitoring({
    name: req.body.name,
    device: req.body.device,
    relay1: req.body.relay1,
    relay2: req.body.relay2,
    relay3: req.body.relay3,
    relay4: req.body.relay4,
  });
  try {
    const newChickenM = await chickenM.save();
    res.status(201).json(newChickenM);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// // Getting One
// router.get("/:id", getSubscriber, (req, res) => {
//   res.json(res.subscriber);
// });

// Updating One
// router.patch("/:id", getSubscriber, async (req, res) => {
//   if (req.body.name != null) {
//     res.subscriber.name = req.body.name;
//   }
//   if (req.body.subscribedToChannel != null) {
//     res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
//   }
//   try {
//     const updatedSubscriber = await res.subscriber.save();
//     res.json(updatedSubscriber);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Deleting One
// router.delete("/:id", getSubscriber, async (req, res) => {
//   try {
//     await res.subscriber.remove();
//     res.json({ message: "Deleted Subscriber" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getSubscriber(req, res, next) {
//   let subscriber;
//   try {
//     subscriber = await Subscriber.findById(req.params.id);
//     if (subscriber == null) {
//       return res.status(404).json({ message: "Cannot find subscriber" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.subscriber = subscriber;
//   next();
// }

module.exports = router;
