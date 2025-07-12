const express = require("express");
const router = express.Router();

// Example placeholder route
router.get("/", (req, res) => {
  res.send("Orders endpoint working!");
});

module.exports = router;
