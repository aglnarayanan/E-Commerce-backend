const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define Feedback schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  rating: String,
  feedback: String,
  createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// POST /api/feedback
router.post('/', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(200).json({ message: 'Feedback saved!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
