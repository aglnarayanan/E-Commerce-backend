// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const fs = require('fs');

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer for file upload
const upload = multer({ dest: 'uploads/' });

// POST /api/products
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    let imageUrl = '';

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'emckart-products',
      });
      imageUrl = result.secure_url;
      fs.unlinkSync(req.file.path); // delete local file after upload
    }

    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl,
    });

    await newProduct.save();

    res.json({ message: 'Product saved', product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
