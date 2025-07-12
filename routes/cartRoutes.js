// backend/routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart
} = require('../controllers/cartController');

router.post('/add', addToCart);
router.get('/', getCart);
router.delete('/remove/:productId', removeFromCart);

module.exports = router;
