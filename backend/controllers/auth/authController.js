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
        // res.status(400);
        return res.json({
            success: false,
            message: 'Email Already Registered',
        });
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

// LOGIN

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('All fields are Required!');
    }

    // CHECKING WHETHER THE EMAIL IS ALREADY REGISTERED
    const registeredUser = await User.findOne({ email });

    if (!registeredUser) {
        return res.json({
            success: false,
            message: "User doesn't Exist!",
        });
    }

    const checkMatch = await bcrypt.compare(password, registeredUser.password);

    if (!checkMatch) {
        return res.json({
            success: false,
            message: 'Invalid Credentials',
        });
    }

    const token = jwt.sign(
        {
            id: registeredUser._id,
            role: registeredUser.role,
            email: registeredUser.email,
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: '60m',
        }
    );

    res.cookie('token', token, { httpOnly: true, secure: false }).json({
        success: true,
        message: 'Logged in Successfully',
    });
});

module.exports = { registerUser, loginUser };
