const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/create-order", async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // amount in paise
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  const order = await instance.orders.create(options);
  res.send(order);
});

module.exports = router;
