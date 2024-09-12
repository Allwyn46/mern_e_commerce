const asyncHandler = require('express-async-handler');

// REGISTER

const register = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
});
