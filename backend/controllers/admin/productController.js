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

module.exports = { handleImageUpload, addProduct };
