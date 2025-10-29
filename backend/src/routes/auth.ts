import express from 'express';
const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  res.json({ message: 'Register route - Coming soon!' });
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res) => {
  res.json({ message: 'Login route - Coming soon!' });
});

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Public
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout route - Coming soon!' });
});

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', (req, res) => {
  res.json({ message: 'Get current user - Coming soon!' });
});

module.exports = router;