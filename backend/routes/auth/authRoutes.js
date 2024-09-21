const express = require('express');
const {
    registerUser,
    loginUser,
    logoutUser,
} = require('../../controllers/auth/authController');
const authHandler = require('../../middlewares/authHandler');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/check-auth', authHandler, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: 'User is Authorized',
        user,
    });
});

module.exports = router;
