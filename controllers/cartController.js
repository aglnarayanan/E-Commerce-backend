exports.addToCart = (req, res) => {
  res.json({ message: 'Item added to cart!' });
};

exports.getCart = (req, res) => {
  res.json({ message: 'User cart data' });
};

exports.removeFromCart = (req, res) => {
  res.json({ message: `Removed item ${req.params.productId}` });
};
