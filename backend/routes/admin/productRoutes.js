const express = require('express');
const { upload } = require('../../helpers/cloudinary');
const handleImageUpload = require('../../controllers/admin/productController');
const router = express.Router();

router.post('/upload_image', upload.single('my_file'), handleImageUpload);

module.exports = router;
