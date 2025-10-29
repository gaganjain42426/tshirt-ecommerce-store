import express from 'express';
const router = express.Router();

// @route   GET /api/cart
// @desc    Get user cart
// @access  Private
router.get('/', (req, res) => {
  res.json({ message: 'Get user cart - Coming soon!' });
});

module.exports = router;