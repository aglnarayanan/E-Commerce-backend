// backend/controllers/uploadController.js
const cloudinary = require('../config/cloudinary');

// backend/controllers/uploadController.js

exports.cloudinaryUpload = async (req, res) => {
  try {
    console.log('File received:', req.file);
    // ✅ Here you’d upload to Cloudinary using SDK
    // For now, just send dummy success:
    res.status(200).json({ message: 'Image uploaded successfully!', file: req.file });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Upload failed', error });
  }
};
