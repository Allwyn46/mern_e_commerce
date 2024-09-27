const asyncHandler = require('express-async-handler');
const { imageUploadhelper } = require('../../helpers/cloudinary');

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

module.exports = handleImageUpload;
