const express = require('express');
const router = express.Router();
const { register, login, getUsers, updateUserRole } = require('../controllers/authController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', register);

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', login);

// @route   GET api/auth/users
// @desc    Get all users
// @access  Private/Admin
router.get('/users', auth, admin, getUsers);

// @route   PUT api/auth/users/:id/role
// @desc    Update user role
// @access  Private/Admin
router.put('/users/:id/role', auth, admin, updateUserRole);

module.exports = router;
