import express from 'express';
const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', (req, res) => {
  res.json({ message: 'Get user profile - Coming soon!' });
});

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', (req, res) => {
  res.json({ message: 'Update user profile - Coming soon!' });
});

module.exports = router;