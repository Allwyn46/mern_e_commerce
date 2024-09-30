const express = require('express');
const { upload } = require('../../helpers/cloudinary');
const {
    handleImageUpload,
    addProduct,
    editProduct,
    deleteProduct,
    fetchAllProds,
} = require('../../controllers/admin/productController');
const router = express.Router();

router.post('/upload_image', upload.single('my_file'), handleImageUpload);
// ADD ROUTE
router.post('/add-product', addProduct);
// EDIT ROUTE
router.put('/edit-product/:id', editProduct);
// DELETE ROUTE
router.delete('/delete-product/:id', deleteProduct);
// PRODS LIST ROUTE
router.get('/all-products', fetchAllProds);

module.exports = router;
