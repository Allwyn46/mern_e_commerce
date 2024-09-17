const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// REGISTER

const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        res.status(400);
        throw new Error('All fields are Required!');
    }

    // CHECKING WHETHER THE EMAIL IS ALREADY REGISTERED
    const availableUser = await User.findOne({ email });

    if (availableUser) {
        res.status(400);
        throw new Error('User Already Registered');
    }

    const hashedPass = await bcrypt.hash(password, 12);

    const newUser = await User.create({
        userName,
        email,
        password: hashedPass,
    });

    // RETURNING RESPONSE FOR SUCCESS AND ERROR
    if (newUser) {
        res.status(201).json({
            success: true,
            message: 'Account Created SuccessFully',
            _id: newUser.id,
            email: newUser.email,
        });
    } else {
        res.status(400);
        throw new Error('User Data Not Valid');
    }
});

module.exports = { registerUser };
