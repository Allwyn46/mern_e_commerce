const asyncHandler = require('express-async-handler');
const { imageUploadhelper } = require('../../helpers/cloudinary');
const Product = require('../../models/Product');

const handleImageUpload = asyncHandler(async (req, res) => {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const url = 'data:' + req.file.mimetype + ';base64,' + b64;
    const result = await imageUploadhelper(url);

    if (result) {
        return res.json({
            success: true,
            result,
        });
    }
});

const addProduct = asyncHandler(async (req, res) => {
    const {
        image,
        title,
        description,
        category,
        brand,
        price,
        salePrice,
        totalStock,
    } = req.body;

    const newProduct = await Product.create({
        image,
        title,
        description,
        category,
        brand,
        price,
        salePrice,
        totalStock,
    });

    res.status(201).json({
        success: true,
        data: newProduct,
    });
});

const fetchAllProds = asyncHandler(async (req, res) => {
    const prodsList = await Product.find({});

    res.status(200).json({
        success: true,
        data: prodsList,
    });
});

const editProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.json({
            success: false,
            message: "id doesn't Exist in the params!",
        });
    }

    const {
        image,
        title,
        description,
        category,
        brand,
        price,
        salePrice,
        totalStock,
    } = req.body;

    const prod = await Product.findById(id);

    if (!prod) {
        return res.status(404).json({
            success: false,
            message: "Product doesn't Exist!",
        });
    }

    const updatedProduct = {
        image: image || prod.image,
        title: title || prod.title,
        description: description || prod.description,
        category: category || prod.category,
        brand: brand || prod.brand,
        price: price || prod.price,
        salePrice: salePrice || prod.salePrice,
        totalStock: totalStock || prod.totalStock,
    };

    const prodToUpdate = await Product.findByIdAndUpdate(id, updatedProduct, {
        new: true,
    });

    res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        prod: prodToUpdate,
    });
});

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const prod = await Product.findById(id);

    if (!prod) {
        return res.status(404).json({
            success: false,
            message: "Product doesn't Exist!",
        });
    }

    const prodToDelete = await Product.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
    });
});

module.exports = {
    handleImageUpload,
    addProduct,
    editProduct,
    deleteProduct,
    fetchAllProds,
};
